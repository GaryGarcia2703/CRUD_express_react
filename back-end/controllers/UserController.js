// import de las tablas del DB
const Users = require("../models/Users")

class UserController {

    // ruta para testear conexión
    async hola (req,res) {
        res.send("Holaaa desde el back-end")
    }

    // ruta para mostrar todos los usuarios
    async ShowUsers (req,res) {
        // asincronico siempre se usa await
        try {
            const usuarios = await Users.findAll();
            return res.json(usuarios)
        } catch (err) {
            return res.status(500).json({error : "error en la DB"})
        }
    }

    // ruta para mostrar un usuario segun su id
    async ShowOneUser (req,res) {
        const { id } = req.params

        try {
            console.log(`Id recibido: ${id}`)
            const usuario = await Users.findByPk(id)

            if (!usuario) {
                return res.status(404).json ({message: "usuario no encontrado"})
            }
            res.json(usuario)

        } catch (err) {
            
            console.log(`Error ${err}`)
            res.status(500).json({ err: "error en la base de datos"})
        }
    }

    // ruta para crea un nuevo usuario
    async CreateNewUser (req,res) {
        console.log("probando ruta")
        const {name, password} = req.body
        const User = req.body
        await Users.create({
            mane,
            age,
            color
        })

        res.json(User)
    }

    
}

module.exports = new UserController();