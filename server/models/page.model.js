const mongoose = require('mongoose');
const obj_id = mongoose.Schema.Types.ObjectId;

let page = new mongoose.Schema({

  number: {type: Number},
  text: { type: String },
  activity_type: { type: String },
  portrait: {type: String},
  edit_allowed: { type: Boolean },
  book: { type: obj_id, ref: "books"}

});

module.exports = mongoose.model('Page', page);
