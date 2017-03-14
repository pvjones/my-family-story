var Product = require('../models/product.model.js');

module.exports = {

  readProduct: function(req, res, next) {
    Product.find(req.query, function(err, product) {
      if (err) return res.status(500).send(err);
      res.status(200).send(product);
    });
  }

};
