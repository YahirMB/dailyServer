//dotenv nos permite leer las variables de entorno de nuestro .env
const dotenv = require("dotenv");
dotenv.config();


const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DBNAME, process.env.DBUSER, process.env.DBPASS, {
  host: process.env.DBHOST,
  dialect: 'mysql', // Elige el dialecto correspondiente a tu base de datos
  dialectOptions: {
    ssl: {
      require: true, // Indica que la conexión SSL es requerida
      rejectUnauthorized: false // Permite que Sequelize se conecte a servidores que utilizan certificados autofirmados o no confiables
    }
  }

});

module.exports = sequelize;