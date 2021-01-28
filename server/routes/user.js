const router = require('express').Router();
let User = require('../models/user.model');
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');
var validator = require("email-validator");
// let auth = require('../middlewares/auth');
const JWT_SECRET = process.env.JWT_SECRET;
const sendEmail = require('../email/email.send')
const msgs = require('../email/email.msgs')
const templates = require('../email/email.templates')
// var passport = require('passport')
// var LocalStrategy = require('passport-local').Strategy;

router.post("/register", async(req,res)=> { 

  const { email, password, passwordCheck, username } = req.body;

  try {
    // Simple validation
    if (!email || !password || !username || !passwordCheck  ) {
      return res.status(400).json({ msg: 'Please enter all fields' });
    }

    //validate email is real
    if(!validator.validate(email)){
        return res.status(400).json({msg:'please enter the valid email address'})
    }
  
    if(password.length < 6){
      return res.status(400).json({ msg: 'the password needs to be at least 6 character long' });
    }
  
  
    if(password != passwordCheck){
      return res.status(400).json({ msg: 'need to enter the same password twitch' });
    }
  
    if(username.length < 3){
      return res.status(400).json({ msg: 'the username needs to be at least 3 character long' });
    }
  
    if(username.length > 10){
      return res.status(400).json({ msg: 'the username needs to be at most 10 character long' });
    }
  
     // Check for existing user
     const existingUser = await User.findOne({ email:email });
     if (existingUser){
      return res.status(400).json({ msg: 'An account with this email address already exist'});
     }
  
     
  
      // Check for existing username
      const existingUsername = await User.findOne({ username:username });
      if (existingUsername){
       return res.status(400).json({ msg: 'the username has already been used'});
      }

      
  
  
     const salt = await bcrypt.genSalt(10);
      if (!salt) throw Error('Something went wrong with bcrypt');
  
      const hash = await bcrypt.hash(password, salt);
      if (!hash) throw Error('Something went wrong hashing the password');

      const SecretCode = Math.floor(100000 + Math.random() * 900000);

  
      const newUser = new User({
        username,
        email,
        password: hash,
        isConfirmed:false,
        SecretCode:SecretCode,
      });


    
  
      const savedUser = await newUser.save();
      if (!savedUser) throw Error('Something went wrong saving the user');
  
      const token = jwt.sign({ id: savedUser._id }, JWT_SECRET, {
        expiresIn: 10000
      });
  
      res.status(200).json({
        token,
        user: {
          id: savedUser.id,
          username: savedUser.username,
          email: savedUser.email,
          isConfirmed:savedUser.isConfirmed
        }
      });


      sendEmail(email,  templates.emailContent(SecretCode));

  

  
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
     
  })


  //confirm the secret code is same with the user input code

  router.post('/confirm',async(req,res)=>{
    const { userID,inputSecretCode } = req.body;
    const existingUser = await User.findById(userID);
    console.log(existingUser);
    if(existingUser){
        if(existingUser.secretCode != inputSecretCode){
          return res.status(400).json({ msg: 'the code is not correct' });
        }
        else{
            existingUser.isConfirmed = true;
            existingUser.secretCode = null;
        }
    }

    else{
      return res.status(400).json({msg:'the user does not exist' });
    }

  })


  //updated the user secret code field when user click on re-send code button.

  router.post('/reSendCode',async(req,res)=>{
    const { userID,resendCode } = req.body;
    const existingUser = await User.findById(userID);
    // const updatedUser = await User.findOneAndUpdate({secretCode});

    if(!existingUser){
      return res.status(400).json({msg:'the user does not exist' });
    }

  
    if(existingUser && !existingUser.isConfirmed){
      existingUser.secretCode = resendCode;
    }

     if(existingUser.isConfirmed){
      existingUser.secretCode = null;
    }

  })


  router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    // Simple validation
    if (!username || !password) {
      return res.status(400).json({ msg: 'Please enter all fields' });
    }
  
    try {
      // Check for existing user
      const user = await User.findOne({ username });
      if (!user) throw Error('User does not exist');

      // const isConfirmed = await User.findOne({isConfirmed});
      // if(!isConfirmed) throw Error('please finish the confirmation step before login.')
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) throw Error('Invalid credentials');
  
      const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: 10000 });
      if (!token) throw Error('Couldnt sign the token');
  
      res.status(200).json({
        token,
        user: {
          id: user._id,
          username: user.username, 
          email: user.email
        }
      });
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  });
  
  // Regular GET request returns all users
  router.route('/').get((req, res) => {
    User.find()
      .then(users => res.json(users))
      .catch(err => res.status(400).json('Error: ' + err));

      
  });
  



// router.post('http://localhost:5000/user/register/login', async (req, res, next) => {
//     passport.authenticate('local',{
//         successRedirect:'/',
//         failureRedirect:'/signIn',
//         failureFlash:true
//     })(req,res,next);
 
//   });
  
 

 
  
  module.exports = router;