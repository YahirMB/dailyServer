//dotenv nos permite leer las variables de entorno de nuestro .env
const dotenv = require("dotenv");
dotenv.config();


const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DBNAME, process.env.DBUSER, process.env.DBPASS, {
  host: 'localhost',
  dialect: 'mysql', // Elige el dialecto correspondiente a tu base de datos
});

module.exports = sequelize;