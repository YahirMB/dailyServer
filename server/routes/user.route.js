const express = require("express");
const userCrtl = require("../controllers/user.controller");
const router = express.Router();


router.get('/getAllUsers',userCrtl.findAllUser)


module.exports = router;