const Page = require('../models/page.model.js');

module.exports = {

  createPage: (req, res, next) => {
    Page.create(req.body, (err, page) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      };
      res.status(200).send(page);
    });
  },

  readPage: (req, res, next) => {
    Page.find(req.query, (err, page) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      };
      res.status(200).send(page);
    });
  },

  updatePage: (req, res, next) => {
    Page.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, page) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      };
      res.status(200).send(page);
    });
  },

  deletePage: (req, res, next) => {
    Page.findByIdAndRemove(req.params.id, req.body, (err, page) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      };
      res.status(200).send(page);
    });
  }

};
