var Order = require('../models/order.model.js');

module.exports = {


  createOrder: function(req, res, next) {
    Order.create(req.body, function(err, order) {
      if (err) return res.status(500).send(err);
      res.status(200).send(order);
    });
  },

  readOrder: function(req, res, next) {
    Order.find(req.query, function(err, order) {              //Is there an advantage to doing req.query instead of findById here?
      if (err) return res.status(500).send(err);
      res.status(200).send(order);
    });
  },

  updateOrder: function(req, res, next) {
    Order.findByIdAndUpdate(req.params._id, req.body, {new: true}, function(err, order) {
      if (err) return res.status(500).send(err);
      res.status(200).send(order);
    });
  },

  deleteOrder: function(req, res, next) {
    Order.findByIdAndRemove(req.params._id, function(err, order) {
      if (err) return res.status(500).send(err);
      res.status(200).send(order);
    });
  }


};
