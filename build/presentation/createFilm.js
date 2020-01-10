"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const createNewFilm_1 = require("../business/usecases/createNewFilm");
const FilmDatabase_1 = require("./../data/FilmDatabase");
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
function createFilmsEndPoint(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const CreateFilmsInput = {
                id: req.body.id,
                title: req.body.title,
                dateDebut: req.body.dateDebut,
                synopsis: req.body.synopsis,
                duration: req.body.duration,
                link: req.body.link,
                imgCover: req.body.imgCover,
            };
            const createFilms = new createNewFilm_1.CreateFilmsUseCase(new FilmDatabase_1.FilmDatabase());
            const result = yield createFilms.execute(CreateFilmsInput);
            res.send({ result, success: true, message: 'Film created succesfully' });
        }
        catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
    });
}
exports.createFilmsEndPoint = createFilmsEndPoint;
