const express = require("express");
const userCrtl = require("../controllers/user.controller");
const router = express.Router();


router.get('/getAllUsers',userCrtl.findAllUser)
router.post('/logIn',userCrtl.finUserByCredentials)
router.post('/signIn',userCrtl.signUp)


module.exports = router;