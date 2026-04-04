import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../public/css/NewUser.css"
function NewUser () {

    // aplicando el useState en los campos de contraseñas y nombre
    const [name, setName] = useState("")
    const [age, SetAge] = useState("")
    const [color, SetColor] = useState("")

    // aplicando useState en el resuiltado para mostrarlo al crear un usuario
    const [resultado , SetResultado] = useState("")

    // aplicando navigate para usarlo aqui
    const navigate = useNavigate();

    // funcion para guardar los datos y tranformalos en JSON para no ser html puro
    const handleSubmit = async (e) => {
        e.preventDefault()

        // campos de donde sacaremos y enviaremos los datos al back=end
        const data = {name, age, color}


        // constante para definir la ruta de back-end adonde seran enviados los datos 

        try {
            const response = await fetch("http://localhost:3000/api/createUser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })

            // constante para esperar la respuesta de conxión con la ruta
            const result = await response.json();
            console.log(result)

            // // logica para informar al usuario si este fue creado o no
            if (!result.success) {
                console.log("erro")
                SetResultado(result.message)
            }

            SetResultado(result.message)

            // redireccionar el usuario a la lista de ususrios al crear MOSTRARLO EN EL DASHBOARD
            navigate("/" , { state: { 
                success: true, 
                message: "Usuario creado" 
                } 
            })          
    

        } catch (error) {
            console.log("Error al crear usuario:", error)
        }
        

    } 

    function AvisoUsuario() {

    }

    return (
        <>
        <div id="fieldset-conteiner">
            <fieldset>

                <div id="form-conteiner">
                    <form onSubmit={handleSubmit}>
                    <legend>Nuevo usuario</legend>
                        <div id="inputs-conteiner">
                            <input
                            type="text"
                            required
                            placeholder="nombre de usuario"
                            value={name}
                            // evento al cambiar el valor del input, para este guardarlo en el UseState
                            onChange={(e) => setName(e.target.value)}
                            />
                            <input
                            type="number"
                            required
                            placeholder="Edad"
                            value={age}
                            onChange={(e) => SetAge(e.target.value)}
                            />
                            <input
                            type="text"
                            required
                            placeholder="color  favorito"
                            value={color}
                            onChange={(e) => SetColor(e.target.value)}
                             />
                            <div>
                                {resultado}
                            </div>
                        </div>
                        <div id="btn-conteiner">
                            <button type="submit">Crear</button>
                            <button type="reset">Cancelar</button>
                        </div>
                    </form>
                </div>

            </fieldset>

        </div>
        </>
    )
}

export default NewUser;