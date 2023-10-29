
const nodemailer = require('nodemailer');

// Configura el transporter (reemplaza 'tu_correo' y 'tu_contraseña' con tus credenciales de Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'dailyplansoporte@gmail.com',
    pass: 'lbzz wwrb wbdf urna', //dailyplan20.
  },
});

module.exports = transporter