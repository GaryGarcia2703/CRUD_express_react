import { useEffect, useState } from "react";
import NewUser from "../pages/NewUser";
import "../../public/css/ErrorMessage.css"

/*aqui tenemos la prop obtenida desde el navigate de NewUser (enviado al crear un nuevo usuario) */
function Notification({ message }) {
    if (!message) return null;

    return (
        <div id="Message-conteiner">
            <span>{message}</span>
        </div>
    )
}

export default Notification;