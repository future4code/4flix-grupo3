import express, { Request, Response } from 'express'
import { createSeriesEndPoint } from './CreateSeriesEndPoint/CreateSeriesEndpoint';


const app = express()
app.use(express.json()) // Linha mágica (middleware)

app.post('/createseries', createSeriesEndPoint);

export default app