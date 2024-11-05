import express from 'express'
import cors from 'cors'
import { getAllGames } from './services/getAllGames.js'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/list', async (req, res) => {
  try {
    // listar juegos
    const juegos = await getAllGames()
    return res.json(juegos)
  } catch (error) {
    console.log(error)
    return res.json(error)
  }
})

app.listen(3000, () => {
  console.log('Server on => http://localhost:3000')
})
