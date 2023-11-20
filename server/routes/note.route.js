const express = require("express");
const noteCrtl = require("../controllers/note.controller");

const router = express.Router();


router.get('/getAllNotes',noteCrtl.findAllNote);
router.post('/createNote',noteCrtl.createNote);
router.put('/updateNote',noteCrtl.updateNote);
router.delete('/deleteNote/:id',noteCrtl.deleteNote);
router.get('/getAllNotesByUser/:id',noteCrtl.findNoteByUser);
router.get('/getAllNotesWithLimit/:id',noteCrtl.findNoteLimit);

module.exports = router