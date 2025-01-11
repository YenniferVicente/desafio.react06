import { Link } from "react-router-dom"

export const Profile = () => {
  return (
    <>
    <div className="profile">
    <h1>Perfil</h1>
    <p>correo: vicentegonzayennifer@gmail.com</p>
    <Link to="/" className="btn btn-light"><span className="bProfile">🔒Logout</span></Link>
    </div>
    </>
  )
}
