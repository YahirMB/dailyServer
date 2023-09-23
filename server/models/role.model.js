const {connection} = require("../../config.db");

let Role = function (role) {
  this.Id = role.id;
  this.Description = role.description;
};



Role.findAll = async () => {
  const [rows] = await connection.execute("Select * from role");
 
  return rows 
};

Role.findById = function (id, result) {
  connection.query("Select * from role where Id = ? ", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

module.exports = Role;