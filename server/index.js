const express = require('express')
  , session = require('express-session')
  , cors = require('cors')
  , bodyParser = require('body-parser')
  // , passport = require('passport')
  // , Auth0Strategy = require('passport-auth0')
  , mongoose = require('mongoose');

//* CONFIG *//
const config = require('./config');

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
// app.use(passport.initialize());
// app.use(passport.session);

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
// passport.use(new Auth0Strategy(config.authConfig, (accessToken, refreshToken, extraParams, profile, done) => {
//   db.user.getUserByAuthId([profile.id], (err, result) => { //cb to execute after return from Auth0
//     if (err) {
//       console.error(err)
//     };
//     let user = result[0];
//     if (!user) {
//       // if there isn't a matching user in the database, create one
//       db.user.createUserByAuth([
//         profile.displayName,
//         profile.id
//       ], (err, result) => {
//         if (err) {
//           console.error(err)
//         } else {
//           console.log('new user created')
//           db.user.getUserByAuthId([profile.id], function(err, result) {
//             if (err) {
//               console.error(err)
//             } else {
//               return done(err, result)
//             }
//           })
//         }
//       })
//     } else {
//       return done(err, result);
//     }
//   })
// }));

// passport.serializeUser((userA, done) => {
//   done(null, userA);
// });

// passport.deserializeUser((userB, done) => {
//   done(null, userB);
// });

//* CONTROLLERS AND SERVICES *//
var addressController = require('./controllers/address.controller.js');
var bookController = require('./controllers/book.controller.js');
var orderController = require('./controllers/order.controller.js');
var pageController = require('./controllers/page.controller.js');
var productController = require('./controllers/product.controller.js');
var userController = require('./controllers/user.controller.js');

//* OUR ENDPOINTS *//
app.post('/api/address', addressController.createAddress);          //x
app.get('/api/address', addressController.readAddress);             //x
app.put('/api/address/:id', addressController.updateAddress);       //x
app.delete('/api/address/:id', addressController.deleteAddress);    //x

app.post('/api/book', bookController.createBook);       //x
app.get('/api/book', bookController.readBook);           //x
app.put('/api/book/:id', bookController.updateBook);    //x
app.delete('/api/book/:id', bookController.deleteBook);   //x

app.post('/api/order', orderController.createOrder);      //x
app.get('/api/order', orderController.readOrder);            //x
app.put('/api/order/:id', orderController.updateOrder);       //x
app.delete('/api/order/:id', orderController.deleteOrder);    //x

app.post('/api/page', pageController.createPage);         //x
app.get('/api/page', pageController.readPage);            //x
app.put('/api/page/:id', pageController.updatePage);      //x
app.delete('/api/page/:id', pageController.deletePage);   //x

app.get('/api/product', productController.readProduct);     //x

app.post('/api/user', userController.createUser);        //x
app.get('/api/user', userController.readUser);           //x
app.get('/api/user', userController.getCurrentUser);    
app.put('/api/user/:id', userController.updateUser);     //x



//* LISTEN *//
app.listen(config.PORT, () => console.log(`Express is running on port ${config.PORT}`));
