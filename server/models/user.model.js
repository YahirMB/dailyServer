const { DataTypes } = require('sequelize');
const sequelize = require('../../config.db'); // Importa la instancia de Sequelize
const bcrypt = require('bcrypt');

const User = sequelize.define('User', {
    Id: {
        type:DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true, // Indica que esta es la clave primaria
        autoIncrement: true,
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'El campo Nombre no puede ser nulo.'
            },
            notEmpty: {
                msg: 'El campo Nombre no puede estar vacío.'
            }
        }
    },
    Lastname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'El campo Apellido no puede ser nulo.'
            },
            notEmpty: {
                msg: 'El campo Apellido no puede estar vacío.'
            }
        }
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notNull: {
                msg: 'El campo Correo electronico no puede ser nulo.'
            },
            notEmpty: {
                msg: 'El campo Correo electronico no puede estar vacío.'
            }
        }
    },
    Password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'El campo Contraseña no puede ser nulo.'
            },
            notEmpty: {
                msg: 'El campo Contraseña no puede estar vacío.'
            }
        }
    },
    Phone: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    IdRol: {
        
        type: DataTypes.INTEGER,
        defaultValue: 1,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'El campo IdRol no puede ser nulo.'
            },
            notEmpty: {
                msg: 'El campo IdRol no puede estar vacío.'
            }
        }
    },
},{
    tableName : 'user',
    timestamps: false,
});


// Hook para cifrar la contraseña antes de guardarla
User.beforeCreate(async (user, options) => {
    if (user.Password) {
      const saltRounds = 10; // Número de rondas de sal (mayor es más seguro pero más lento)
      user.Password = await bcrypt.hash(user.Password, saltRounds);
    }
  });
  
  // Función para verificar una contraseña
  User.prototype.validPassword = async function (password) {

    return await bcrypt.compare(password, this.Password);
  };

module.exports = User
