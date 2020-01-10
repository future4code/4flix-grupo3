import express, {Request, Response} from 'express'
import {CreateFilmsUseCase, CreateFilmsInput} from "../business/usecases/createNewFilm"
import { FilmDatabase } from './../data/FilmDatabase';

const app = express()
app.use(express.json()) // Linha mágica (middleware)

app.post('/filme', async (request: Request, response: Response) => {
    const filmGateway = new FilmDatabase()
    const useCase = new CreateFilmsUseCase(filmGateway)
  
   try { const input: CreateFilmsInput = {
        id:request.body.id,
        title: request.body.title,
        dateDebut: request.body.dateDebut,
        synopsis: request.body.synopsis,
        duration: request.body.duration,
        link: request.body.link,
        imgCover: request.body.imgCover,
    }
  
    const result = await useCase.execute(input)
  
    response.send({result, success: true, message: 'Film created succesfully'})
} catch (e) {
  console.log(e)
  response.status(500).send(e)
}
  })

export default app