const mongoose = require('mongoose');
const obj_id = mongoose.Schema.Types.ObjectId;

let book = new mongoose.Schema({

  title: { type: String },
  title_img: {type: String},
  date_started: { type: Date, default: new Date() },
  user: { type: obj_id, ref: "users"},
  print_qty: {type: Number},
  //pages: something
});

module.exports = mongoose.model('Book', book);
