import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../public/css/DeleteUser.css"

 function DeleteUser() {
    const [data, setData] = useState("");
    const [resultado, SetResultado] = useState("")
    const { id } = useParams() // lee el id desde la url

    // aplicando navigate para usarlo aqui
    const navigate = useNavigate();

    async function Confirmar() {
            try {

                // buscar informaciones al back-end en la ruta DeleteUser
                const response = await fetch(`http://localhost:3000/api/deleteUser/${id}` , {
                    method: "DELETE" // aqui colocamos el http verb como delete que el el fetch usa solamente el metodo GET
                })

                // constante para esperar la respuesta de conexión con la ruta (obtener datos)
                const result = await response.json();

                // logica para informar si el usuario fue borrado
                if (!result.success) {
                    console.log("erro")
                    SetResultado(result.message)
                }

                /*
                // guardar el valor del resultado en el stado dela variable
                // ------LUEGOO PARA MOSTRAR EN EL DASHBOARDDDD -----
                 "data"
                setData(result.message)
                */

                // redirecionar
                navigate("/" , {
                    state: {
                    success: true,
                    message: "Usuario borrado",
                    type: "delete"
                    }
                })  
                

            } catch (error) {
                console.log("Error al BORRAR usuario:", error)
            }
    }

    function Cancelar() {
        navigate("/")
    }


    return (
        <>
            <div id="delete-confirmation">
                    <h2>Deseas borrar este usuario?</h2>

                    <div id="buttons-conteiner">
                        <button id="confirmar" onClick={Confirmar}>Sí</button>
                        <button id="cancelar" onClick={Cancelar}>No</button>
                    </div>
            </div>
        </>
    )

}

export default DeleteUser;