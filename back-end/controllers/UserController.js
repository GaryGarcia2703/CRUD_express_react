// import de las tablas del DB
const Users = require("../models/Users")

class UserController {
    async hola (req,res) {
        res.send("HOlaaa desde el back-end")
    }

    async ShowUsers (req,res) {
        // asincronico siempre se usa await
        const GetUsuarios = await Users.findAll()
        console.log(GetUsuarios)  

        if ((await GetUsuarios).length === 0) {
            res.json("no hay usuarios")
        }
        res.json(GetUsuarios)
    }
}

module.exports = new UserController();