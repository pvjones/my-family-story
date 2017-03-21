const Order = require('../models/order.model.js');

module.exports = {

  createOrder: (req, res, next) => {
    Order.create(req.body, (err, order) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      };
      res.status(200).send(order);
    });
  },

  readOrder: (req, res, next) => {
    Order.find(req.query, (err, order) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      };
      res.status(200).send(order);
    });
  },

  updateOrder: (req, res, next) => {
    Order.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .populate("books")
      .exec((err, order) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      };
      res.status(200).send(order);
    });
  },

  deleteOrder: (req, res, next) => {
    Order.findByIdAndRemove(req.params.id, (err, order) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      };
      res.status(200).send(order);
    });
  }

};
