import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function UserDetail() {
  const { id } = useParams(); // ← lee el id desde la URL
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/user/${id}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [id]);

  if (!user) return <p>Cargando...</p>;

  return (
    <div>
      <h2>Detalle del usuario</h2>
      <p>Nombre: {user.name}</p>
      <p>Edad: {user.age}</p>
      <p>Color: {user.color}</p>
    </div>
  );
}

export default UserDetail;