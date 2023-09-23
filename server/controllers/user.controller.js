const User = require("../models/user.model")

let userCrtl = {}


userCrtl.findAllUser = async (req, res) => {

    const data = await User.findAll();
    res.json({
        status:200,
        message:'data recibida',
        result:data
    })
    console.log(data)
}

module.exports = userCrtl;