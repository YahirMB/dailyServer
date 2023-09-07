const User = require("../models/role.model");

const roleCtrl = {}

roleCtrl.findAll = (req, res) => {

  User.findAll(function (err, user) {
    if (err) res.send(err);

    res.status(200).json(user);
  });

};

roleCtrl.findById = function (req, res) {
  User.findById(req.params.id, function (err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};

module.exports = roleCtrl