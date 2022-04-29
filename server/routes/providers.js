const router = require('express').Router();
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy;

//facebook 
router.get('/auth/facebook', passport.authenticate('facebook'));

router.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect: '/',
                                      failureRedirect: '/signIn' }));
