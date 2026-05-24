import UserForm from "../components/UserForm";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
function UpdateUser() {

    
    // useState en los campos
    const [name, setName] = useState("")
    const [age , SetAge] = useState("")
    const [color, SetColor] = useState("")

    const [error, setError] = useState("");

    // leer el id del user
    const { id } = useParams()

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()

        // campos de donde sacaremos y enviaremos los datos al back=end
        const data = {name, age, color}

        try {
            const response = await fetch(`http://localhost:3000/api/updateUser/${id}` , {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })

            // esperar respuesta del back
            const result = await response.json()
            console.log(result)

            // informar si el update funcionó
            if (!result.success) {
                // se guarda el mensaje dentro de usestate Error
                setError(result.message);
                return;
            }
        } catch (error) {
            console.log("Error al actualizar datos del usuario" , error)
        }

        navigate("/", {
            state: {
                message: "Usuario actualizado!",
                type: "update"
            }
        })
    }

    // redirecionar al actualizar usuario
    function CancelarBtn() {
        navigate("/")
    }

    return (
        <>
            <UserForm
                mode="update"
                handleSubmit={UpdateUser}
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

export default UpdateUser;