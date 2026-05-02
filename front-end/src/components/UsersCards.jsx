
import { Link } from "react-router-dom";
import "../../public/css/users.css"
function UsersCards({ UserContent }) {

    return (
        <div>
            <h1>Lista De Usuarios</h1>

            <div className="Users-conteiner">
                {/*aqui el map recorre el array pasado por la prop*/}
                {/*TIENE QUE SER LA MISMA SI NO RETORNARA NADA*/}
                {UserContent.map(user => (
                    <div className="User-conteiner" key={user.id}>
                        <p id="Username">{user.name}</p>

                        <section id="User-buttons">
                            <Link to={`/users/${user.id}`}>
                                <button id="showUser">Ver usuario</button>
                            </Link>

                            <Link to={`/DeleteUser/${user.id}`}>
                                <button id="Delete">Borrar usuario</button>
                            </Link>
                        </section>

                    </div>
                ))}
            </div>


            <div id="Create-btn-conteiner">
                <Link to={"/NewUser"}>
                    <button id="Create"> + Crear Nuevo usuário</button>
                </Link>
            </div>
        </div>
    )

}

export default UsersCards;