const express = require("express");
const router = express.Router()

// import del controller
const UserController = require("../controllers/UserController")

// ruta de puebra
router.get("/hola", UserController.hola)

// ruta para enviar usuario de la DB
router.get("/users" , UserController.ShowUsers)

// ruta para mostrar usuario en especifico
router.get("/user/:id" , UserController.ShowOneUser)

router.post("/createUser" , UserController.CreateNewUser)

router.delete("/deleteUser/:id" , UserController.DeleteUser)

module.exports = router;

