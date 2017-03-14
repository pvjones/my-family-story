var Book = require('../models/book.model.js');

module.exports = {

  createBook: function(req, res, next) {
    Book.create(req.body, function(err, book) {
      if (err) return res.status(500).send(err);
      res.status(200).send(book);
    });
  },

  readBook: function(req, res, next) {
    Book.find(req.query, function(err, book) {
      if (err) return res.status(500).send(err);
      res.status(200).send(book);
    });
  },

  updateBook: function(req, res, next) {
    Book.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, book) {
      if (err) return res.status(500).send(err);
      res.status(200).send(book);
    });
  },

  deleteBook: function(req, res, next) {
    Book.findByIdAndRemove(req.params.id, function(err, book) {
      if (err) return res.status(500).send(err);
      res.status(200).send(book);
    });
  }

};
