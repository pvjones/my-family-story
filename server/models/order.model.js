const mongoose = require('mongoose');
const obj_id = mongoose.Schema.Types.ObjectId;

let order = new mongoose.Schema({

  books: [{ type: obj_id, ref: "books"}],
  user: { type: obj_id, ref: "users"},
  subtotal: {type: Number},
  tax: {type: Number},
  shipping: {type: Number}

});

module.exports = mongoose.model('Order', order);
