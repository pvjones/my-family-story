const mongoose = require('mongoose');

let user = new mongoose.Schema({

  firstname: { type: String },
  lastname: { type: String },
  email: { type: String, unique: true, dropDups: true, trim: true },
  phone: {type: String},
  dateregistered: { type: Date },
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

module.exports = mongoose.model('User', user);
