const User = require("../models/user.model")


let userCrtl = {}

//get all users
userCrtl.findAllUser = async (req, res) => {

    const data = await User.findAll();
    res.json({
        status: 200,
        message: 'data recibida',
        result: data
    })

}


//log In
userCrtl.finUserByCredentials = async (req, res) => {

    try {
        const user = await User.findOne({ where: { Email: req.body.email } });

        if (!user) {
            res.json({
                status: 404,
                message: 'No existe este correo, verifica tu correo',
                result: user
            })
        } else {

            const validPassword = await user.validPassword(req.body.password);

            if (validPassword) {

                res.json({
                    status: 200,
                    message: 'Credenciales correctas',
                    result: user
                })

            } else {

                res.json({
                    status: 401,
                    message: 'La contraseña que ingresaste es incorrecta',
                    result: []
                })
            }


        }
    } catch (error) {

        res.json({
            status: 400,
            message: 'Hubo error en inciar sesión',
            result: error.message
        })
    }


}

//sign Up

userCrtl.signUp = async (req, res) => {

    try {

        const existingUser = await User.findOne({ where: { Email: req.body.Email } })

        if (!existingUser) {


            const data = await User.create(req.body)

            res.json({
                status: 200,
                message: 'Se creo con exito',
                result: data
            })
        } else {

            res.json({
                status: 400,
                message: 'Ya existe este correo registrado',
                result: 0
            })
        }

    } catch (error) {
        res.json({
            status: 400,
            message: 'Hubo un error en crear una cuenta',
            result: error.message
        })
    }
}

//update profile 

userCrtl.updateProfile = async (req, res) => {

    try {

        const data = await User.update(req.body, {
            where: { Id: req.params.idUser },
        })

        if (data == 1) {
            // todo consultar y regresar la data actualizada 

            const userModified = await User.findOne({ where: { Id: req.params.idUser } })

            res.json({
                status: 200,
                message: 'Se actulizo usuario correctamente',
                result: userModified
            })
        } else {
            res.json({
                status: 400,
                message: 'No hay datos nuevos que actualizar',
                result: data
            })
        }

    } catch (error) {

        res.json({
            status: 400,
            message: 'Hubo un error en actulizar usuario',
            result: error.message
        })

    }


}

//update img When is created

userCrtl.updateImgByUser = async (req, res) => {
    const data = await User.update(req.body ,{ where: { Email: req.params.email } })

    if (data == 1) {
        // todo consultar y regresar la data actualizada 

        const userModified = await User.findOne({ where: { Email: req.params.email } })

        res.json({
            status: 200,
            message: 'Se actulizo tu img correctamente',
            result: userModified
        })
    } else {
        res.json({
            status: 400,
            message: 'No hay Imagen para actualizar',
            result: data
        })
    }

}

module.exports = userCrtl;