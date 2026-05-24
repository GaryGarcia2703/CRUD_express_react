import { useEffect, useState } from "react";
import NewUser from "../pages/NewUser";
import UpdateUser from "../pages/UpdateUser";
import "../../public/css/Notificacion.css"

/*aqui tenemos la prop obtenida desde el navigate de NewUser (enviado al crear un nuevo usuario) */
function Notification({ message, type }) {
    if (!message) return null;

    var typeofnotification = ""

    if (type === "create") {   
        typeofnotification = "create"
    } 

    if (type === "delete") {
        typeofnotification = "delete"
    }

    if (type === "update") {
        typeofnotification = "update"
    }

    return (
        <div className="Message-conteiner" id={typeofnotification}>
            <span>{message}</span>
        </div>
    )
}

export default Notification;