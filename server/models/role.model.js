const {connection} = require("../../config.db");

let User = function (user) {
  this.user_id = user.user_id;
  this.user_email = user.user_email;
  this.user_name = user.user_name;
  this.user_password = user.user_password;
};
// 모든 사용자 검색

User.findAll = function (result) {
	connection.query("Select * from role", function (err, res) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};
// 특정 사용자 검색

// User.findById = function (id, result) {
//   mysql.query("Select * from user where user_id = ? ", id, function (err, res) {
//     if (err) {
//       console.log("error: ", err);
//       result(err, null);
//     } else {
//       result(null, res);
//     }
//   });
// };

module.exports = User;