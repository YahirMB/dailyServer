const { DataTypes } = require("sequelize");
const sequelize = require("../../config.db");


const Note = sequelize.define('Note', {
    Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true, // Indica que esta es la clave primaria
        autoIncrement: true,
    },
    Title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'El campo Titulo no puede ser nulo.'
            },
            notEmpty: {
                msg: 'El campo Titulo no puede estar vacío.'
            }
        }
    },
    Description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'El campo Description no puede ser nulo.'
            },
            notEmpty: {
                msg: 'El campo Description no puede estar vacío.'
            }
        }
    },
    ExpiriationDate: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Location: {
        type: DataTypes.STRING,
        allowNull: true
    },

    CreationHour: {
        type: DataTypes.STRING,
        allowNull: false,
        // defaultValue: sequelize.literal('CURRENT_TIME'), // Utiliza CURRENT_TIME como valor predeterminado
    },
    IdUser: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'El campo IdUser no puede ser nulo.'
            },
            notEmpty: {
                msg: 'El campo IdUser no puede estar vacío.'
            }
        }
    },
    IdTypeOfNote: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:1,
        validate: {
            notNull: {
                msg: 'El campo IdTypeOfNote no puede ser nulo.'
            },
            notEmpty: {
                msg: 'El campo IdTypeOfNote no puede estar vacío.'
            }
        }
    }
},
    {
        tableName: 'note',
        timestamps: false,
    }

)

module.exports = Note;