const express = require("express")
const router = express.Router();
const passport = require("passport")
const User = require("../models/User")

var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret:process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:5000/google/callback"
},
async function(accessToken, refreshToken, profile, done) {
  
  const newUser = {
    googleId:profile.id,
    displayName:profile.displayName,
    firstName:profile.name.givenName,
    // lastName:profile.name.familyName,
    profileImage:profile.photos[0].value
  }

  try {
    let user = await User.findOne({ googleId:profile.id,})
    if(user){
      done(null,user);
    }else{
      user = await User.create(newUser);
      done(null,user)
    }
  } catch (error) {
    console.log(error);
  }
}
));


router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile','email'] }));

router.get('/google/callback', 
  passport.authenticate('google', { 
    failureRedirect: '/login-failure',
    successRedirect:"/dashboard"

}),
  // function(req, res) {
  //   // Successful authentication, redirect home.
  //   res.redirect('/');
  // }
  );

// Route if something goes wrong 

router.get ("/login-failure",(req,res)=>{
  res.send("SOmething went wrong.....")
})



// Presust user data after suceessful authentication

passport.serializeUser(function(user,done) {
  done(null,user.id)
})

// Retrive user data from session 

passport.deserializeUser(async function(id, done) {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});


// destroy the user session 

router.get("/logout",(req,res)=>{
  req.session.destroy(error=>{
    if(error){
      console.log(error)
    }else{
      res.redirect("/")
    }
  })
})







module.exports = router;