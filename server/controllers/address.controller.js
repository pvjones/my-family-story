var Address = require('../models/address.model.js');

module.exports = {

  createAddress: function(req, res, next) {
    Address.create(req.body, function(err, address) {
      if(err) return res.status(500).send(err);
      res.status(200).send(address);
    });
  },

  readAddress: function(req, res, next) {
    Address.find(req.query, function(err, address) {
      if (err) return res.status(500).send(err);
      res.status(200).send(address);
    });
  },

  updateAddress: function(req, res, next) {     //58c857014a3813b75763bdac
    Address.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, address) {
      if (err) return res.status(500).send(err);
      res.status(200).send(address);
    });
  },

  deleteAddress: function(req, res, next) {
    Address.findByIdAndRemove(req.params.id, function(err, address) {
      if (err) return res.status(500).send(err);
      res.status(200).send(address);
    });
  }


};
