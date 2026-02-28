import { useState } from "react";
async function NewUser () {

    // aplicando el useState en los campos de contraseñas y nombre
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    // funcion para guardar los datos y tranformalos en JSON para no ser html puro
    const handleSubmit = async (e) => {
        e.preventDefault()

        // campos de donde sacaremos y guardaré los datos
        const data = {name, password}
    } 

    // constante para definir la ruta de back-end adonde seran enviados los datos 
    const response = await fetch("http://localhost:3000/api/CreateUser", {
        method: "POST",
        header: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })


    // constante para esperar la respuesta de conxión con la ruta
    const result = await response.json();
    console.log(result)

    return (
        <>
        <fieldset>
            <form onSubmit={handleSubmit}>
            <legend>Nuevo usuario</legend>
                <input 
                type="text" 
                placeholder="nombre de usuario"
                // evento al cambiar el valor del input, para este guardarlo en el UseState
                onChange={(e) => setName(e.target.value)}
                />

                <input 
                type="password"
                placeholder="contraseña"
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