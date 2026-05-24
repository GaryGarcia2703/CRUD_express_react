import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import UserForm from "../components/UserForm";
import ErrorMessage from "../components/ErrorMessage";
import "../../public/css/NewUser.css"
function NewUser () {

    // aplicando el useState en los campos de contraseñas y nombre
    const [name, setName] = useState("")
    const [age, SetAge] = useState("")
    const [color, SetColor] = useState("")

    // aplicando useState en el resultado para mostrarlo al crear un usuario o si esto da error

    // use state en caso de error al crear el usuario
    const [error, setError] = useState("");

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

            // constante para esperar la respuesta de conexión con la ruta
            const result = await response.json();
            console.log(result)

            // aqui obtenemos el resultado del back-end (error al crear el usuario)
            if (!result.success) {
                // se guarda el mensaje dentro de usestate Error
                setError(result.message);
                return;
            }

            // si el usuario fue creado, este es redireccionado al home junto con estos datos,
            navigate("/" , { 
                state: { 
                success: true, 
                message: "Usuario creado" ,
                type: "create"
                } 
            })          
    

        } catch (error) {
            console.log("Error al crear usuario:", error)
        }
        

    } 

    function CancelarBtn() {
        navigate("/")
    }


    return (
        <>
            <UserForm
                mode="create"
                handleSubmit={handleSubmit}
                name={name}
                setName={setName}

                age={age}
                SetAge={SetAge}

                color={color}
                SetColor={SetColor}

                error={error}

                handleSubmit={handleSubmit}

                CancelarBtn={CancelarBtn}
            />
        </>
    )
}

export default NewUser;