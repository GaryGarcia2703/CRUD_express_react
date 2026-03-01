import { useState } from "react";
function NewUser () {

    // aplicando el useState en los campos de contraseñas y nombre
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    // funcion para guardar los datos y tranformalos en JSON para no ser html puro
    const handleSubmit = async (e) => {
        e.preventDefault()

        // campos de donde sacaremos y guardaré los datos
        const data = {name, password}


        // constante para definir la ruta de back-end adonde seran enviados los datos 

        try {
            const response = await fetch("http://localhost:3000/api/CreateUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        // constante para esperar la respuesta de conxión con la ruta
        const result = await response.json();
        console.log(result)

        } catch (error) {
            console.error("Error al crear usuario:", error)
        }
        

    } 

    return (
        <>
        <fieldset>
            <form onSubmit={handleSubmit}>
            <legend>Nuevo usuario</legend>
                <input 
                type="text" 
                placeholder="nombre de usuario"
                value={name}
                // evento al cambiar el valor del input, para este guardarlo en el UseState
                onChange={(e) => setName(e.target.value)}
                />

                <input 
                type="password"
                placeholder="contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                 />           

                <button type="submit">Crear</button>

                <button type="reset">Cancelar</button>
            </form>
        </fieldset>
        </>
    )
}

export default NewUser;