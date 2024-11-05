import { getConnection } from '../db/context.js'

const getAllGames = async () => {
  try {
    const connection = await getConnection()
    const query = await connection.request().query(
      `
        SELECT id, nombre, descripcion, categoria
        FROM Juegos;
      `
    )
    return query.recordset
  } catch (error) {
    console.log(error)
    return new Error(error)
  }
}

export { getAllGames }
