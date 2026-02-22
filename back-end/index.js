require("dotenv").config();
const express = require("express")
const cors = require("cors")

const routes = require("./routes/routes")

const app = express()

// conexion con react 
app.use(cors());

// usar para poder enviar y recibir json
app.use(express.json());

app.get("/", (req, res) => {
  console.log("Ruta / fue llamada");
  res.send("Backend funcionando");
});

app.use("/api" , routes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () =>{
    console.log(`Back-end rodando en http://localhost:${PORT}`)
})