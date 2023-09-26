const express = require("express");
const noteCrtl = require("../controllers/note.controller");

const router = express.Router();


router.get('/getAllNotes',noteCrtl.findAllNote);
router.post('/createNote',noteCrtl.createNote);
router.put('/updateNote',noteCrtl.updateNote);
router.delete('/deleteNote/:id',noteCrtl.deleteNote);

module.exports = router