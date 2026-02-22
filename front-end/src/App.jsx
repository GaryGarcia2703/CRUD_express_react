import { useEffect, useState } from "react";
import Users from "./pages/user";


function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then(res => res.json())
      .then(data => {
        console.log("Datos recibidos:", data);
        setUsers(data);
      })
      .catch(err => console.error("Error:", err));
  }, []);

  return (
    <div>
      <h1>Usuarios desde MySQL</h1>

      {users.map(user => (
        <div key={user.id}>
          <p>Nombre: {user.name}</p>
          <p>Edad: {user.age}</p>
          <p>Color: {user.color}</p>
        </div>
      ))}
    </div>
  );
}


export default App;