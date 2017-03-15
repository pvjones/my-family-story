var Product = require('../models/product.model.js');

module.exports = {

  readProduct: (req, res, next) => {
    Product.find(req.query, (err, product) => {
      if (err) console.error(err), res.status(500).send(err);
      res.status(200).send(product);
    });
  }

};
