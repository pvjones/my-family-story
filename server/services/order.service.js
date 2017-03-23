const Order = require('../models/order.model.js');

module.exports = {
  getOrderDetails: (req, res, next) => {
    Order
      .findById(req.params.id)
      .populate({
        path: 'books',
        populate: { path: 'print_qty' }
      })
      .exec((err, order) => {
        if (err) {
          return res.status(500).send(err);
        }
        return res.status(200).send(order);
      })
  },

  getActiveOrder: (req, res, next) => {
    console.log("looking for completed order")
    Order.find({
      "user": req.params.user,
      "completed": { $exists: false }
    })
      .exec((err, order) => {
        if (err) {
          console.error(err);
          return res.status(500).send(err);
        } else if (order.length === 0) {
          return res.status(500).send('No active orders')
        } else {
          res.status(200).send(order);
        }
      });
  }

};

