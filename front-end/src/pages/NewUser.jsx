function NewUser () {
    return (
        <>
        <fieldset>
            <form method="POST">
            <legend>Nuevo usuario</legend>
                <input type="text" placeholder="nombre de usuario"/>

                <input type="password" placeholder="contraseña"/>           

                <button type="submit">Crear</button>

                <button type="reset">Cancelar</button>
            </form>
        </fieldset>
        </>
    )
}

export default NewUser;