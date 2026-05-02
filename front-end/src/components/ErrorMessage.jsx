import { useEffect, useState } from "react";
import NewUser from "../pages/NewUser";
function ErrorMessage({ message }) {
    if (!message) return null;

    return (
        <div id="Message-conteiner">
            <span>{message}</span>
        </div>
    )
}

export default ErrorMessage;

export default ErrorMessage;