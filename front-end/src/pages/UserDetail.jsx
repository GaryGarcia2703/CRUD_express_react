import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";

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
    // Aqui utilize un componente (este archivo es solamente para requisicion) 
    
    // enviar los datos obtenisdo user={user}
    <UserCard user={user} />
  );
}

export default UserDetail;