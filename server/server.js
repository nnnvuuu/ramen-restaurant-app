const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require("path");
require('dotenv').config();

// var session = require("express-session")
// var bodyParser = require("body-parser");
// const passport = require('passport');

//Passport config
// require('./config/passport')(passport);


const app = express();
const port = process.env.PORT || 5000;

const uri = process.env.ATLAS_URI;
const JWT_SECRET = process.env.JWT_SECRET;

app.use(cors());
app.use(express.json());

// app.use(express.static("public"));


// Express Session
// app.use(session({ secret: JWT_SECRET,resave:true,saveUninitialized:true}));

// // BodyParser
// app.use(bodyParser.urlencoded({ extended: false }));

// //passport middleware
// app.use(passport.initialize());
// app.use(passport.session());
 
mongoose.connect(uri,{ useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology: true }  );
const connection = mongoose.connection;
connection.once('open', ()=>{
  console.log('MongoDB database connection estabilished successfully');
})

mongoose.set('useFindAndModify', false);

// const articlesRouter = require('./routes/articles');
const userRouter = require('./routes/user');

// app.use('/articles',articlesRouter);
app.use('/user',userRouter);


  // Serve static assets if in production
  if (process.env.NODE_ENV === 'production') {
    // Set static folder

  app.use(express.static("client/build"));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
    });

    
  } 

app.listen(port,()=> {
  console.log(`Server is running on port: ${port}`);
}); 
