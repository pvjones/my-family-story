const mongoose = require('mongoose');
const obj_id = mongoose.Schema.Types.ObjectId;

let page = new mongoose.Schema({

  number: {type: Number},
  text: { type: String },
  activity_type: { type: String },
  custom_activity: { type: String },
  portrait: {type: String},
  edit_allowed: { type: Boolean },
  number: {type: Number},

});

module.exports = mongoose.model('Page', page);
