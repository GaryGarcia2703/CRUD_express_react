import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
import "../../public/css/NewUser.css"
function UserForm({
    mode,
    name,
    setName,
    age,
    SetAge,
    color,
    SetColor,
    error,
    handleSubmit,
    CancelarBtn
}) {

    return (
        <>

            { /* componente de que noti de que algo salio mal */}
            <ErrorMessage message={error} />

            <div id="fieldset-conteiner">
                <fieldset>

                    <div id="form-conteiner">

                        <form onSubmit={handleSubmit}>
                            <legend>
                                {mode === "create"
                                    ? "Nuevo usuario"
                                    : "Actualizar usuario"
                                }
                            </legend>

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

                            </div>
                            <div id="btn-conteiner">
                                <button type="submit">
                                    {mode === "create"
                                        ? "Crear"
                                        : "Actualizar"}
                                </button>
                                <button type="reset" onClick={CancelarBtn}>Cancelar</button>
                            </div>
                        </form>
                    </div>

                </fieldset>

            </div>
        </>
    )
}


export default UserForm;