const Note = require("../models/note.model");

const noteCrtl = {}


//get all notes 
noteCrtl.findAllNote = async (req, res) => {

    try {
        const data = await Note.findAll();
        res.json({
            status: 200,
            message: 'Lista de notas recibida',
            result: data
        })
    } catch (error) {
        res.json({
            status: 400,
            message: 'Hubo un error en obtener todas las notas',
            result: error.message
        })
    }



}

//create a new note
noteCrtl.createNote = async (req, res) => {

    console.log(req.body)
    try {
        const data = await Note.create(req.body)

        res.json({
            status: 200,
            message: 'Nota creada con exito',
            result: data
        })
    } catch (error) {
        res.json({
            status: 400,
            message: 'Hubo un error en crear la nota',
            result: error.message
        })
    }

}

//update existing note by Id

noteCrtl.updateNote = async (req,res) => {
    
    try {
        const data = await Note.update(req.body,{
            where:{
                Id:req.body.IdNote
            }
        })
        
        res.json({
            status: 200,
            message: 'Se actualizo la nota',
            result: data
        })
        
    } catch (error) {
         
        res.json({
            status: 400,
            message: 'Hubo un error en actualizar la nota',
            result: error.message
        })
        
    }
}

//delete note by Id

noteCrtl.deleteNote = async (req,res) => {
    try {
       
        const data = await Note.destroy({where:{Id:req.params.id}})

        res.json({
            status: 200,
            message: 'Se elimino la nota',
            result: data
        })

    } catch (error) {
        res.json({
            status: 400,
            message: 'Hubo un error en eliminar la nota',
            result: error.message
        })
    }
}

module.exports = noteCrtl;