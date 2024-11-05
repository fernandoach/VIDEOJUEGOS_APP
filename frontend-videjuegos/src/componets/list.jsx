import { useEffect, useState } from "react"

function List() {
  const [juegos, setJuegos] = useState([])
  useEffect(() => {
    const url = 'http://localhost:3000/list'
    const options = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      }
    };
    
    fetch(url, options)
      .then(response => response.json())
      .then(response => setJuegos(response))
      .catch( error => console.log(error))
  }, [])
  return (
    <div>
      <h1>Listando juegos</h1>
      <table border>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Categoria</th>
            <th>Descripción</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {
            juegos && juegos.map((item, index) => {
              return(
                <tr key={index}>
                <td>{item.nombre}</td>
                <td>{item.categoria}</td>
                <td>{item.descripcion}</td>
                <td>
                  <a href="#">Editar</a>
                  <a href="#">Eliminar</a>
                </td>
                {console.log(item.nombre)}
              </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export { List }
