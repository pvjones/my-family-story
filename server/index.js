const express = require('express')
  , session = require('express-session')
  , cors = require('cors')
  , bodyParser = require('body-parser')
  , passport = require('passport')
  , Auth0Strategy = require('passport-auth0')
  , mongoose = require('mongoose');

//* CONFIG *// 
const config = require('./config');

//* CONTROLLERS AND SERVICES *//

//* EXPRESS *//
const app = module.exports = express();

//* BODYPARSER *//
app.use(bodyParser.json());

//* SESSION AND PASSPORT *//
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: config.SESSION_SECRET
}));
app.use(passport.initialize());
app.use(passport.session);

//* PUBLIC SERVICE *//
app.use(express.static(__dirname + './../dist'));

//* DATABASE CONNECTION *//
const mongoURI = config.MONGO_URI;
mongoose.connect(mongoURI);
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB at', mongoURI);
});

//* DATABASE MODEL INIT *//


//* AUTH0 STRATEGY *//
passport.use(new Auth0Strategy(config.authConfig, (accessToken, refreshToken, extraParams, profile, done) => {
  db.user.getUserByAuthId([profile.id], (err, result) => { //cb to execute after return from Auth0
    // if (err) {
    //   console.error(err)
    // };
    // let user = result[0];
    // if (!user) { 
    //   // if there isn't a matching user in the database, create one
    //   db.user.createUserByAuth([
    //     profile.displayName,
    //     profile.id
    //   ], (err, result) => {
    //     if (err) {
    //       console.error(err)
    //     } else {
    //       console.log('new user created')
    //       db.user.getUserByAuthId([profile.id], function(err, result) {
    //         if (err) {
    //           console.error(err)
    //         } else {
    //           return done(err, result)
    //         }
    //       })
    //     }
    //   })
    // } else {
    //   return done(err, result);
    // }
  })
}));

passport.serializeUser((userA, done) => {
  done(null, userA);
});

passport.deserializeUser((userB, done) => {
  done(null, userB);
});

//* USER ENDPOINTS *//


//* BOOK ENDPOINTS *//


//* CART ENDPOINTS *//


//* LISTEN *//
app.listen(config.PORT, () => console.log(`Express is running on port ${config.PORT}`));