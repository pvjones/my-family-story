var User = require('../models/user.model.js');

module.exports = {

  createUser: function(req, res, next) {
    User.create(req.body, function(err, user) {
      if (err) return res.status(500).send(err);
      res.status(200).send(user);
    });
  },

  readUser: function(req, res, next) {
    User.find(req.query, function(err, user) {
      if (err) return res.status(500).send(err);
      res.status(200).send(user);
    });
  },

  getCurrentUser: function(req, res, next) {
    if (!req.user) return res.status(401).send('current user not defined');
    return res.status(200).send(req.user);
  },

  updateUser: function(req, res, next) {
    User.findByIdAndUpdate(req.params._id, req.body, {new: true}, function(err, user) {
      if (err) return res.status(500).send(err);
      res.status(200).send(user);
    });
  }


};
