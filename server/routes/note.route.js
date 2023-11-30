const express = require("express");
const noteCrtl = require("../controllers/note.controller");

const router = express.Router();


router.get('/getAllNotes/:idUser', noteCrtl.findAllNote);
router.post('/getNoteByDate/:idUser', noteCrtl.findNotesByUserId);
router.get('/getNoteById/:idNote', noteCrtl.findNoteById);
router.post('/createNote', noteCrtl.createNote);
router.put('/updateNote/:id', noteCrtl.updateNote);
router.delete('/deleteNote/:id', noteCrtl.deleteNote);
router.get('/getAllNotesByUser/:id', noteCrtl.findNoteByUser);
router.get('/getAllNotesWithLimit/:id', noteCrtl.findNoteLimit);

module.exports = router