import {Request, Response} from 'express'
import {CreateFilmsUseCase, CreateFilmsInput} from "../business/usecases/createNewFilm"
import { FilmDatabase } from './../data/FilmDatabase';
import { generateRandomId } from '../services/V4IdGenerator'


/*const app = express()
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

export default app*/
export async function createFilmsEndPoint(req: Request, res: Response) {
  const filmsID = generateRandomId();
    try {
        const CreateFilmsInput: CreateFilmsInput = {
          id: filmsID,
          title: req.body.title,
          dateDebut: req.body.dateDebut,
          synopsis: req.body.synopsis,
          duration: req.body.duration,
          link: req.body.link,
          imgCover: req.body.imgCover,
        }

        const createFilms = new CreateFilmsUseCase(new FilmDatabase() );

        const result = await createFilms.execute(CreateFilmsInput);

        res.send({result, success: true, message: 'Film created succesfully'})
      } catch (e) {
        console.log(e)
        res.status(400).send(e)
      }}


