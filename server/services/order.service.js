var Order = require('../models/order.model.js');
var Book = require('../models/book.model.js');
var Page = require('../models/page.model.js');

// readBook: (req, res, next) => {
//   Book.find(req.query, (err, book) => {
//     if (err) console.error(err), res.status(500).send(err);
//     res.status(200).send(book);
//   });
// },
//
// module.exports = {
//   getOrderDetails: (req, res, next) => {
//     Order.find(req.query, (err, book) => {
//       if (err) console.error(err), res.status(500).send(err);
//       res.status(200).send(book);
//     });
//   }
// };

//
// function getOrderDeeeeets = function(req, res, next) {
//   let orderObj = {};
//   Order.find(req.query, function(res) {
//     orderObj.order = res;
//   })
//   .then(function getBooks(orderId) {
//     orderObj.booksInOrder = [];
//     var result = Book.find({Book.order: orderId});
//     orderObj.booksInOrder.push(result);
//   })
//   .then(function getPage() {
//
//   })
// }
