var User = require('../models/user.model.js');

module.exports = {

  getCurrentUser: (req, res, next) => {
    if (!req.user) res.status(401).send('current user not defined');
    res.status(200).send(req.user);
  },

  createUser: (req, res, next) => {
    User.create(req.body, (err, user) => {
      if (err) console.error(err), res.status(500).send(err);
      res.status(200).send(user);
    });
  },

  readUser: (req, res, next) => {
    User.find(req.query, (err, user) => {
      if (err) console.error(err), res.status(500).send(err);
      res.status(200).send(user);
    });
  },

  updateUser: (req, res, next) => {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, user) => {
      if (err) console.error(err), res.status(500).send(err);
      res.status(200).send(user);
    });
  }

};
