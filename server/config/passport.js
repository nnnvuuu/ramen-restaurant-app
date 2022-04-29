
// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const User = require('../models/user.model');

// module.exports = function(passport){
//     passport.use(new FacebookStrategy({
//       clientID: FACEBOOK_APP_ID,
//       clientSecret: FACEBOOK_APP_SECRET,
//       callbackURL: "http://www.example.com/auth/facebook/callback"
//     },
//     function(accessToken, refreshToken, profile, done) {
//         User.findOrCreate(..., function(err, user) {
//           if (err) { return done(err); }
//           done(null, user);
//         });
//       }
//     ));
    

//     passport.serializeUser(function(user, done) {
//         done(null, user.id);
//       });
      
//       passport.deserializeUser(function(id, done) {
//         User.findById(id, function(err, user) {
//           done(err, user);
//         });
//       });
// }