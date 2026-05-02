import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UsersCards from "../components/UsersCards";
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
    // pasar la variable (state) con el contenido obtenido del back-end
    // pasando el parametro y su valor (dentro de la llaves(users))
    <UsersCards UserContent={users}>

    </UsersCards>
  );
}

export default Users;