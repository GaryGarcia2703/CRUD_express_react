require("dotenv").config();
const { Sequelize } = require("sequelize");


// variables para la conexión con la db

// crear una nueva constancia apartir de Seuqueliza

const sequelize = new Sequelize (
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        post: process.env.DB_PORT,
        dialect: "mysql",
    }
)

// test de conexión
; (async () => {
    try {
        await sequelize.authenticate();
        console.log("----Conectado a MySQL")

        await sequelize.sync();
        console.log("-----Tablas sincronizadas");
    }

    catch (error) {
        console.error(`-------Error al intentar conexión con la DB: ${error}`)
    }
})();

module.exports = sequelize