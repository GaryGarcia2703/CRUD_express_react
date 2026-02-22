export default function Users ({ users }) {
    <>
        {users.map(user => (
            <div key={user.id}>
                <h2>{user.name}</h2>
                <p>Edad: {user.age}</p>
                <p>Color: {user.color}</p>
            </div>

        ))}

    </>
}