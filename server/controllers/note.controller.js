const Note = require("../models/note.model");
const Sequelize = require('sequelize');

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

//get note with limit 3 for day 

noteCrtl.findNoteLimit = async (req, res) => {
    try {
        const notesByDate = {};
        const data = await Note.findAll({
            where: { idUser: 1 },
            order: [['ExpiriationDate', 'DESC']]
        });


        data.forEach(note => {

            const date = note.dataValues.ExpiriationDate.toString() // Obtener la fecha como cadena
            const d =  dateForm(date);
            
            if (!notesByDate[date]) {
                notesByDate[date] = 0;
                notesByDate[d] = [];
            }

            if (notesByDate[date] < 3) {
                notesByDate[d].push(note)
                notesByDate[date]++;
            }

        });


    
        for (const key in notesByDate) {
            
            if(typeof notesByDate[key] === "number"){
                delete notesByDate[key];
            }
        }

        res.json({
            status: 200,
            message: 'Lista de notas recibida',
            result: notesByDate
        })
    } catch (error) {
        res.json({
            status: 400,
            message: 'Hubo un error en obtener todas las notas',
            result: error.message
        })
    }
}

noteCrtl.findNoteByUser = async (req, res) => {

    try {
        const data = await Note.findAll({ where: { IdUser: req.params.id } })



        if (data.length == 0) {
            res.json({
                status: 404,
                message: 'No tienes notas agendadas',
                result: data
            })
        } else {


            res.json({
                status: 200,
                message: 'Lista de notas por usuario',
                result: data
            })
        }

    } catch (error) {
        res.json({
            status: 400,
            message: 'Hubo un error en obtener todas las notas del usuario',
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

noteCrtl.updateNote = async (req, res) => {

    try {
        const data = await Note.update(req.body, {
            where: {
                Id: req.body.IdNote
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

noteCrtl.deleteNote = async (req, res) => {
    try {

        const data = await Note.destroy({ where: { Id: req.params.id } })

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



const dateForm = (checkDate) => {
     // Obtener la fecha actual
     const fechaActual = new Date();
     // Crear un objeto Date con la fecha de hace una semana
     const compareDate = new Date(checkDate);

     const diferncia = fechaActual - compareDate ;
     const mayorUnaSemana = 7 * 24 * 60 * 60 * 1000

     // Array con los nombres de los días de la semana
     const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado','Domingo'];

     // Obtener el nombre del día de la semana para la fecha actual
     
     
     const nombreDiaActual = diasSemana[compareDate.getDay()];
   


     if (diferncia > mayorUnaSemana && fechaActual.getMonth) {
         const year = compareDate.getFullYear();
         const month = String(compareDate.getMonth() + 1).padStart(2, '0'); // Asegura que tenga dos dígitos
         const day = String(compareDate.getDate() + 1).padStart(2, '0'); // Asegura que tenga dos dígitos

        const formDate = `${year}/${month}/${day}`;
         console.log('Ha pasado una semana desde la fecha actual.',formDate);
         return formDate
     } else {
         console.log(`El día de la semana actual es ${nombreDiaActual}.`);
         return nombreDiaActual
     }

}

module.exports = noteCrtl;