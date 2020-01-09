import knex from 'knex'
import {Film} from '../business/entities/filme'
import { FilmGateway } from './../business/gateways/FilmGateway'

interface FilmModel {
    id:string;
    title: string;
    dateDebut: string;
    synopsis: string;
    duration: string;
    link: string;
    imgCover: string;
  }
  
  export class FilmDatabase implements FilmGateway {
    private connection: knex
  
    constructor() {
      this.connection = knex({
        client: 'mysql',
        connection: {
          host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
          user: 'caroline',
          password: 'teste',
          database: '4flix'
        }
      })
    }
  
    async saveFilm(film: Film): Promise<void> {
        if (!film.getId()) {
          throw new Error('Nao tem id')
        }
      }
  }
