const { DataTypes } = require("sequelize");

// import de las config de la tadabase (conexión)
const sequelize = require("../config/database")

const Users = sequelize.define("Users", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    color: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

module.exports = Users;