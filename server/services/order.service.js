const Book = require('../models/book.model.js');
const Order = require('../models/order.model.js');


module.exports = {
  getOrderDetails: (req, res, next) => {
    Order
      .findById(req.params.id)
      .populate({
        path: 'books',
        model: 'Order'
      })
      .exec((err, order) => {
        if (err) {
          return res.status(500).send(err);
        }
        return res.status(200).send(order);
    })
  }
};

// module.exports = {
//   getOrderDetails: (req, res, next) => {
//     Order
//       .findById(req.params.id)
//       .populate('Order.books')
//       .exec((err, order) => {
//         if (err) {
//           return res.status(500).send(err);
//         }
//         console.log(order);
//         return res.status(200).send(order);
//     })
//   }
// };
