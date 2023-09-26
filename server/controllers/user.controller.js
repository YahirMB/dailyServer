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
                status: 200,
                message: 'No existe ese usuario o correo',
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
                    status: 200,
                    message: 'Credenciales incorrectas',
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
        const data = await User.create(req.body)

        res.json({
            status: 200,
            message: 'Se creo con exito',
            result: data
        })
    } catch (error) {
        res.json({
            status: 400,
            message: 'Hubo un error en crear una cuenta',
            result: error.message
        })
    }    
}

module.exports = userCrtl;