const Role = require("../models/role.model");

const roleCtrl = {}

const { connection } = require("../../config.db");

roleCtrl.findAll = async (req, res) => {

  const data = await Role.findAll();

  res.json({
    status:'Data recibida',
    code:200,
    result:data
  })





  // Role.findAll(function (err, role) {
  //   if (err) res.send(err);

  //   res.status(200).json(role);
  // });

};

roleCtrl.findById = function (req, res) {

  connection.query("Select * from role where Id = ? ", req.params.id, function (err, data) {
    if (err) {
      console.log("error: ", err);
      // result(err, null);
      res.send(err);
    } else {
      // result(null, res);
      res.status(200).json(data);
    }
  });

  // Role.findById(req.params.id, function (err, role) {
  //   if (err) res.send(err);
  //   res.json(role);
  // });
};

module.exports = roleCtrl