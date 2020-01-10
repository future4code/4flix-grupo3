import express, {Request, Response} from 'express'
import {createFilmsEndPoint} from "./createFilm"

​
const app = express()
app.use(express.json()) // Linha mágica (middleware)
​
app.post('/createfilms', createFilmsEndPoint);

export default app