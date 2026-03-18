import { useEffect } from "react";
import { useParams } from "react-router-dom";

function DeleteUser() {
    const [users, setUsers] = useState([]);
    const { id } = useParams() // lee el id desde la url

    useEffect(() => {
        fetch`http://localhost:3000/api/deleteUser/${id}`
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [id])


    🧠 Preguntas clave para que lo soluciones

👉 ¿Dónde deberías poner el fetch para eliminar?

¿en useEffect?

¿o cuando el usuario haga click?

👉 ¿Qué evento usarías para el botón "sí"?

Pista:

onClick

👉 Después de borrar:

¿Cómo vuelves al dashboard?

(Pista: ya usaste esto antes 😉)

👉 ¿Tiene sentido guardar datos en users aquí?

O solo necesitas:

confirmar → borrar → salir
🧠 Mini resumen estilo mentor

Tu código ahora mismo:

intenta borrar automáticamente
pero lo hace mal (fetch incorrecto)
y además sin interacción del usuario
    return (
        <>
            <div>
                <form action="GET">
                    <h2>Deseas borrar este usuario?</h2>

                    <input type="submit" value={"si"}/> 

                    <input type="button" value={"no"}/>
                </form>
            </div>
        </>
    )

}

export default DeleteUser;