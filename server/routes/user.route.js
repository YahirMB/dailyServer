const express = require("express");
const userCrtl = require("../controllers/user.controller");
const router = express.Router();


router.get('/getAllUsers',userCrtl.findAllUser)
router.post('/logIn',userCrtl.finUserByCredentials)
router.post('/signIn',userCrtl.signUp)
router.put('/updateProfile/:idUser',userCrtl.updateProfile)
router.put('/updateImg/:email',userCrtl.updateImgByUser)
router.post('/recoverAccount',userCrtl.recoverAccount)
router.put('/restorePassword',userCrtl.restorePassword)


module.exports = router;