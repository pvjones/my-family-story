var Product = require('../models/product.model.js');

module.exports = {

  createProduct: function(req, res, next) {
    Product.create(req.body, function(err, product) {
      if (err) return res.status(500).send(err);
      res.status(200).send(product);
    });
  },

  readProduct: function(req, res, next) {
    Product.find(req.query, function(err, product) {
      if (err) return res.status(500).send(err);
      res.status(200).send(product);
    });
  },

  updateProduct: function(req, res, next) {
    Product.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, product) {
      if (err) return res.status(500).send(err);
      res.status(200).send(product);
    });
  },

  deleteProduct: function(req, res, next) {
    Product.findByIdAndRemove(req.params.id, function(err, product) {
      if (err) return res.status(500).send(err);
      res.status(200).send(product);
    });
  }

};
