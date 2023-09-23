

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../config.db'); // Importa la instancia de Sequelize

const User = sequelize.define('User', {
    Id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true, // Indica que esta es la clave primaria
        autoIncrement: true,
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    Lastname: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    Password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    Phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    IdRol: {
        type: DataTypes.NUMBER,
        allowNull: false,
        unique: true,
    },
},{
    tableName : 'user',
    timestamps: false,
});

module.exports = User
