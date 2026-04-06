import UserDetail from "../pages/UserDetail";

// recibe el usuario como prop
function UserCard({ user }) {
    return (
    <div>
      <h2>Detalle del usuario</h2>
      <p>Nombre: {user.name}</p>
      <p>Edad: {user.age}</p>
      <p>Color: {user.color}</p>
    </div>
    )
}

export default UserCard;