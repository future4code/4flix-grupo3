import express, {Request, Response} from 'express'
import {createFilmsEndPoint} from "./createFilm"
import { createSeriesEndPoint } from './CreateSeriesEndPoint/CreateSeriesEndpoint';


const app = express()
app.use(express.json()) // Linha mágica (middleware)

app.post('/createfilms', createFilmsEndPoint);

app.post('/createseries', createSeriesEndPoint);

export default app