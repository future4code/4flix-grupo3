import {Film} from '../entities/filme'

export interface FilmGateway {
  saveFilm(film: Film): Promise<void>
}