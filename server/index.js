const express = require('express')
  , session = require('express-session')
  , cors = require('cors')
  , bodyParser = require('body-parser')
  , mongoose = require('mongoose');

//* CONFIG *//
const config = require('./config');

//* EXPRESS *//
const app = module.exports = express();

//* EXPRESS PUBLIC SERVICE *//
app.use(express.static(__dirname + './../dist'));

//* BODYPARSER *//
app.use(bodyParser.json());

//* DATABASE CONNECTION *//
const mongoURI = config.MONGO_URI;
mongoose.connect(mongoURI);
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB at', mongoURI);
});

//* SESSION AND PASSPORT *//
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: config.SESSION_SECRET
}));

let passport = require('./services/passport.service');
app.use(passport.initialize());
app.use(passport.session());

//* PASSPORT ENDPOINTS *//
app.get('/api/auth', (req, res, next) => {
  // provide a different state for callback
  if (req.query.state) req.session.state = req.query.state;
  passport.authenticate('auth0')(req, res, next);
});
app.get('/api/auth/callback', (req, res, next) => {
  // check if user should be redirected to a specific state
  let state = 'home';
  if (req.session.state) state = req.session.state;
  req.session.state = null;
  passport.authenticate('auth0', {
    successRedirect: `/#!/${state}`,
    failureRedirect: `/#!/`
  })(req, res, next);
});

app.get('/api/logout', function(req, res, next) {
  req.logout();
  return res.redirect('/')
});

//* DATABASE CONTROLLERS *//
var addressController = require('./controllers/address.controller.js');
var bookController = require('./controllers/book.controller.js');
var orderController = require('./controllers/order.controller.js');
var pageController = require('./controllers/page.controller.js');
var productController = require('./controllers/product.controller.js');
var userController = require('./controllers/user.controller.js');

//* ADDRESS ENDPOINTS *//
app.post('/api/address', addressController.createAddress);
app.get('/api/address', addressController.readAddress);
app.put('/api/address/:id', addressController.updateAddress);
app.delete('/api/address/:id', addressController.deleteAddress);

//* BOOK ENDPOINTS *//
app.post('/api/book', bookController.createBook);
app.get('/api/book', bookController.readBook);
app.put('/api/book/:id', bookController.updateBook);
app.delete('/api/book/:id', bookController.deleteBook);

//* ORDER ENDPOINTS *//
app.post('/api/order', orderController.createOrder);
app.get('/api/order', orderController.readOrder);
app.put('/api/order/:id', orderController.updateOrder);
app.delete('/api/order/:id', orderController.deleteOrder);

//* PAGE ENDPOINTS *//
app.post('/api/page', pageController.createPage);
app.get('/api/page', pageController.readPage);
app.put('/api/page/:id', pageController.updatePage);
app.delete('/api/page/:id', pageController.deletePage);

//* PRODUCT ENDPOINTS *//
app.post('/api/product', productController.createProduct);
app.get('/api/product', productController.readProduct);
app.put('/api/product/:id', productController.updateProduct);
app.delete('/api/product/:id', productController.deleteProduct);

//* USER ENDPOINTS *//
app.post('/api/user', userController.createUser);
app.get('/api/user', userController.readUser);
app.get('/api/me', userController.getCurrentUser);
app.put('/api/user/:id', userController.updateUser);

//* LISTEN *//
app.listen(config.PORT, () => console.log(`Express is running on port ${config.PORT}`));
