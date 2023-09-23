//dotenv nos permite leer las variables de entorno de nuestro .env
const dotenv = require("dotenv");
dotenv.config();

// const mysql = require('mysql2');
// let connection;

// try {
//     connection = mysql.createConnection({
//         host: process.env.DBHOST,
//         user: process.env.DBUSER,
//         password: process.env.DBPASS,
//         database: process.env.DBNAME
//     }).promise();
// } catch (error) {
//     console.log("Error al conectar con la base de datos");
// }

// module.exports = {connection};



const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DBNAME, process.env.DBUSER, process.env.DBPASS, {
  host: 'localhost',
  dialect: 'mysql', // Elige el dialecto correspondiente a tu base de datos
});

module.exports = sequelize;