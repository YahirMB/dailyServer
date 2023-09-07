const express = require("express");
const router = express.Router();

const roleCtrl = require('../controllers/role.controller')

router.get("/", roleCtrl.findAll);
router.get("/:id", roleCtrl.findById);

module.exports = router;