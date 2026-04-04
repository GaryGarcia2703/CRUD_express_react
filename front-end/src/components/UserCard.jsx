import UserDetail from "../pages/UserDetail";

function UserCard() {
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