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
  }
};

