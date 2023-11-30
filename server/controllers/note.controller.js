const Note = require("../models/note.model");
const { Op } = require("sequelize")

const noteCrtl = {}


//get all notes 
noteCrtl.findAllNote = async (req, res) => {

    try {
        const data = await Note.findAll({ where: { IdUser: req.params.idUser } });
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
//get note by id
noteCrtl.findNoteById = async (req, res) => {

    try {
        const data = await Note.findOne({
            where: {
                Id: req.params.idNote
            }
        });
        res.json({
            status: 200,
            message: 'Nota recibida',
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
noteCrtl.findNotesByUserId = async (req, res) => {

    try {
        const data = await Note.findAll({
            where: {
                IdUser: req.params.idUser,
                ExpiriationDate: req.body.expirationDate,
            }
        });
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
        const notesCountByDate = {};
        const notesByDate = {};
        const data = await Note.findAll({
            where: { idUser: req.params.id },
            order: [['ExpiriationDate', 'ASC']]
        });

        data.forEach(note => {
            const date = note.dataValues.ExpiriationDate.toString();
            const formattedDate = dateForm(date);

            const currentDate = new Date();
            const expirationDate = new Date(date);



            if (expirationDate >= currentDate || formattedDate == 'Hoy') {

                notesCountByDate[date] = (notesCountByDate[date] || 0);

                if (!notesByDate[formattedDate]) {
                    notesByDate[formattedDate] = [];
                }

                if (notesCountByDate[date] <= 3) {
                    notesByDate[formattedDate].push(note);
                }

            }

        });


        res.json({
            status: 200,
            message: 'Lista de notas recibida',
            result: notesByDate
        });
    } catch (error) {
        res.json({
            status: 400,
            message: 'Hubo un error en obtener todas las notas',
            result: error.message
        });
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
                Id: req.params.id
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

    // Supongamos que tienes dos fechas: fechaActual y compareDate
    const fechaActual = new Date();  // Fecha actual
    const compareDate = new Date(checkDate);  // Fecha con la que quieres comparar

    // Calcula la diferencia en milisegundos
    const diferenciaEnMilisegundos = compareDate - fechaActual;


    // Convierte la diferencia de milisegundos a días
    const diferenciaEnDias = diferenciaEnMilisegundos / (1000 * 60 * 60 * 24);

    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

    console.log(diferenciaEnDias);
    if (diferenciaEnDias < 6 && diferenciaEnDias > -1) {

        if (diferenciaEnDias > -1 && diferenciaEnDias < 0) {
            return 'Hoy'
        }

        return days[compareDate.getDay()];

    } else {

        if (diferenciaEnDias < -1) {
            return 'null'
        } else {

            const year = compareDate.getFullYear();
            const month = String(compareDate.getMonth() + 1).padStart(2, '0'); // Asegura que tenga dos dígitos
            const day = String(compareDate.getDate()).padStart(2, '0'); // Asegura que tenga dos dígitos

            const formDate = `${year}/${month}/${day}`;

            return formDate
        }
    }



}

module.exports = noteCrtl;