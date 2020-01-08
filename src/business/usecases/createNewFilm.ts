import {Film} from '../entities/filme'
import {FilmGateway} from '../gateways/FilmGateway'

export class CreateFilmsUseCase {
    private databaseGateway: FilmGateway;

    constructor(databaseGateway: FilmGateway) {
        this.databaseGateway = databaseGateway;
    }

    public async execute(film: CreateFilmsInput) {
    
        const newFilms = new Film (film.id, film.title, film.dateDebut, film.synopsis, film.link, film.duration, film.imgCover);

        const result = await this.databaseGateway.saveFilm(newFilms);

        return result;
    }
}

export interface CreateFilmsInput {
    id:string;
    title: string;
    dateDebut: string;
    synopsis: string;
    duration: string;
    link: string;
    imgCover: string;
 
}
