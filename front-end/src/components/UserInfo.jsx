import UserDetail from "../pages/UserDetail";
import "../../public/css/UserCard.css"

// recibe el usuario como prop
function UserCard({ user }) {
    return (
    <div>
      <h2>Detalles del usuario</h2>

      <div className="content-conteiner">

        <section id="img-conteiner">
          <img src="https://i.pinimg.com/736x/c4/69/e4/c469e4363283071d7cd0dc9a655a7441.jpg" alt="" />
        </section>

        <section id="user-data-conteiner">
          <section id="name-age-conteiner">
            <p>Nombre: {user.name}</p>
            <p>Edad: {user.age}</p>
          </section>
          <p>Color: {user.color}</p>
        </section>

        
      </div>
    </div>
    )
}

export default UserCard;