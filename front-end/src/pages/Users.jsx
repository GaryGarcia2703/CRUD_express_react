import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      <h1>Lista de usuarios</h1>

      {users.map(user => (
        <div key={user.id}>
          <p>{user.name}</p>

          <Link to={`/users/${user.id}`}>
            <button>Ver usuario</button>
          </Link>

          <Link to={`/DeleteUser/${user.id}`}>
           <button>Borrar usuario</button>
          </Link>
        </div>
      ))}


      <div>
        <Link to={"/NewUser"}>
          <button>Crear Nuevo usuário</button>
        </Link>
      </div>     
    </div>
  );
}

export default Users;