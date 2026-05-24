import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import UsersCards from "../components/UsersCards";
import Notification from "../components/Notification";
import "../../public/css/users.css"

function Users() {
  const [users, setUsers] = useState([]);

  // aqui guardamos los datos enviados desde newuser al crear un nuevo usuario
  const location = useLocation();

  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (

    // pasar la variable (state) con el contenido obtenido del back-end

    // pasando el parametro y su valor (dentro de la llaves(users))

    <div>
      { /* componente de que noti de que todo salio bien */}


      { /* aqui pasamos los datos de newuser al crear un nuevo usuario (como prop) */}
      <Notification message={location.state?.message} type={location.state?.type} />

      { /* renderizar todos los usuarios */}
      <UsersCards UserContent={users}>
      </UsersCards>
    </div>
  );
}

export default Users;