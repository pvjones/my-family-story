var Page = require('../models/page.model.js');

module.exports = {

  createPage: function(req, res, next) {
    Page.create(req.body, function(err, page) {
      if(err) return res.status(500).send(err);
      res.status(200).send(page);
    });
  },

  readPage: function(req, res, next) {
    Page.find(req.query, function(err, page) {
      if (err) return res.status(500).send(err);
      res.status(200).send(page);
    });
  },

  updatePage: function(req, res, next) {
    Page.findByIdAndUpdate(req.params._id, req.body, {new: true}, function(err, page) {
      if (err) return res.status(500).send(err);
      res.status(200).send(page);
    });
  },

  deletePage: function(req, res, next) {
    Page.findByIdAndRemove(req.params._id, req.body, function(err, page) {
      if (err) return res.status(500).send(err);
      res.status(200).send(page);
    });
  }


};
