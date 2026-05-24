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

        try {
            console.log("probando ruta")

            const {name, age, color} = req.body

            if (name.length > 10) {
                console.log("Nombre muy largo!")
                return res.status(400).json({
                    success: false,
                    message: "Nombre muy largo!"
                });
            } 

            if (age > 40) {
                console.log("Edad inválida")
                return res.status(400).json({
                    success: false,
                    message: "Edad inválida"
                });
            }
            const User = req.body

            await Users.create({
                name,
                age,
                color
            })

            res.json({
                success: true,
                message: "Usuario creado con exito"
            })
        }
        
        catch (error) {
            res.json({
                success: false,
                message: "error al crear usuario"
            })
        }
        
    }

     async DeleteUser (req,res) {
        const { id } = req.params
        try {
            await Users.destroy({
                where: {id: id}
            })

            res.json({
                success: true,
                message: "Usuario Borrado"
            })

        } catch(error) {
            res.json({
                success: false,
                message: "error al borrar el usuario"
            })
        }
        
    }

    async UpdateUser (req, res) {
        const { id } = req.params

        const {name, age, color} = req.body


        try {
            // validación de datos
            if (age > 90) {
                console.log("edad invalida!")
                return res.status(400).json({
                        success: false,
                        message: "Edad inválida"
                });
            }

            if (name.length > 10) {
                console.log("Nombre muy largo!")
                return res.status(400).json({
                    success: false,
                    message: "Nombre muy largo!"
                })
            }

            // antes de actualizar un usuario, validar datos

            const user = req.body


            // enivar y actualizar datos
            await Users.update (user,
                {
                    where: {id: id}
                }
            ) 

            // enivar respuesta si los datos llegaron a la db
            res.json({
                success: true,
                message: "Datos del usuario actualizados!"
            })
        } catch(error) {
            res.json({
                success: false,
                message: "error al actualizar datos del usuario"
            })
        }
       
        
    } 
}

module.exports = new UserController();