const mongoose = require('mongoose');

let user = new mongoose.Schema({

  firstname: { type: String },
  lastname: { type: String },
  email: { type: String, unique: true, dropDups: true, trim: true },
  phone: {type: String},
  dateregistered: { type: Date, default: new Date() },
  auth0id: { type: String },
  privilege: { type: String}

});

module.exports = mongoose.model('User', user);
