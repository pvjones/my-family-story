const mongoose = require('mongoose');
const obj_id = mongoose.Schema.Types.objectId;

let order = new mongoose.Schema({

  books: [{ type: obj_id, ref: "books"}],
  user: { type: obj_id, ref: "users"}

});

module.exports = mongoose.model('Order', order);
