const express = require("express");
const router = express.Router()

// import del controller
const UserController = require("../controllers/UserController")

// ruta de puebra
router.get("/hola", UserController.hola)

// ruta para enviar usuario de la DB
router.get("/Users" , UserController.ShowUsers)

// ruta para mostrar usuario en especifico
router.get("/User/:id" , UserController.ShowOneUser)

router.post("/CreateUser" , UserController.CreateNewUser)

module.exports = router;

