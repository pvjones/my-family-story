const mongoose = require('mongoose');

let user = new mongoose.Schema({
  name: { type: String },
  email: { type: String, index: true, trim: true },
  auth0Id: { type: String }
});

// User.pre('save', function(next) {
// 	var user = this;
// 	if (!user.isModified('password'))	return next();
//   var salt = bcrypt.genSaltSync(10);
//   var hash = bcrypt.hashSync(user.password, salt);
//   user.password = hash;
//   return next(null, user);
// });

// User.methods.verifyPassword = function(reqBodyPassword) {
//   var user = this;
//   return bcrypt.compareSync(reqBodyPassword, user.password);
// };

module.exports = mongoose.model('User', User);
