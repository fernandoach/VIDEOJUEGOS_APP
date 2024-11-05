import { Link } from "react-router-dom"

function Navigation() {
  return (
    <nav>
      <Link to={'/'}>Inicio</Link>
      <Link to={'/list'}>Listar</Link>
    </nav>
  )
}

export default Navigation