import {Film} from '../business/entities/filme'
import { FilmGateway } from './../business/gateways/FilmGateway'
import knex from 'knex'

interface FilmModel {
    id:string;
    title: string;
    dateDebut: string;
    synopsis: string;
    duration: string;
    link: string;
    imgCover: string;
  }

  class FilmEntityMapper {
    entityToModel(entity: Film): FilmModel {
        return {
            id: entity.getId(),
            title: entity.getTitle(),
            dateDebut: entity.getDateDebut(),
            synopsis: entity.getSynopsis(),
            duration:  entity.getDuration(),
            link: entity.getLink(),
            imgCover: entity.getImgCover(),
            
        };
   }
}

  export class FilmDatabase implements FilmGateway {
    private connection: knex
    private FilmEntityMapper: FilmEntityMapper;
  
    constructor() {
      this.connection = knex({
        client: 'mysql',
        connection: {
          host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
          user: 'caroline',
          password: 'cb1764d745d86007cf0b9bdf1f8b0008',
          database: 'caroline'
        }
      })
      this.FilmEntityMapper = new FilmEntityMapper();
    }
  
    async saveFilm(films: Film): Promise<boolean> {
      try {
          await this.connection('filme').insert(this.FilmEntityMapper.entityToModel(films));
          return true;
      } catch (err) {
          console.log(err);
          return false;
      }
  }
}