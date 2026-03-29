import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../public/css/users.css"

function Users() {
  const [users, setUsers] = useState([]);
  
  // use useState para mostrar si hay nuevos usuarios creados
  const [AvisoUser, SetAvisoUser] = useState()

  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Lista De Usuarios</h1>

    <div className="Users-conteiner">
      {users.map(user => (
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
  );
}

export default Users;