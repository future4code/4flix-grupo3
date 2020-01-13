import { CreateSeriesDatabaseGateway } from '../business/gateways/CreateSeriesDatabaseGateway';
import { Series } from '../business/entities/Series';
import { Episode } from '../business/entities/Episode';
import knex from 'knex';

class SeriesModel {
    constructor(
        public id: string,
        public title: string,
        public debut_date: Date,
        public synopsis: string,
        public link: string,
        public picture: string) { }
}

class EpisodeModel {
    constructor(
        public id: string,
        public serie_id: string,
        public title: string,
        public synopsis: string,
        public link: string,
        public picture: string,
        public duration: string) { }
}

class EpisodeEntityMapper {
    entityToModel(entity: Episode, seriesId: string): EpisodeModel {
        return {
            id: entity.getId(),
            serie_id: seriesId,
            title: entity.getTitle(),
            synopsis: entity.getSynopsis(),
            link: entity.getLink(),
            picture: entity.getPicture(),
            duration: entity.getLength()
        };
    }

    modelToEntity(model: EpisodeModel): Episode {
        return new Episode(model.id, model.title, model.duration, model.link, model.picture, model.synopsis);
    }

}
export class SeriesEntityMapper {
    entityToModel(entity: Series): SeriesModel {
        return {
            id: entity.getId(),
            title: entity.getTitle(),
            synopsis: entity.getSynopsis(),
            link: entity.getLink(),
            picture: entity.getPicture(),
            debut_date: entity.getDate()
        };
    }
    modelToEntity(model: EpisodeModel): Episode {
        return new Episode(model.id, model.title, model.duration, model.link, model.picture, model.synopsis);
    }
}

export class SeriesDatabase implements CreateSeriesDatabaseGateway {
    private connection: knex;
    private seriesEntityMapper: SeriesEntityMapper;
    private episodeEntityMapper: EpisodeEntityMapper;

    constructor() {
        this.connection = knex({
            client: 'mysql',
            connection: {
                host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
                user: 'daniel',
                password: '0b741a51df3eb52305629b5c97960c31',
                database: 'daniel'
            }
        });

        this.seriesEntityMapper = new SeriesEntityMapper();
        this.episodeEntityMapper = new EpisodeEntityMapper();
    }
    async insertSeries(series: Series, episodes: Episode[]): Promise<boolean> {
        try {
            await this.connection('series').insert(this.seriesEntityMapper.entityToModel(series));
            for (let episode of episodes) {
                await this.connection('episode').insert(this.episodeEntityMapper.entityToModel(episode, series.getId()));
            }
            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    }
    async insertEpisodes(episodes: Episode[], seriesId: string): Promise<boolean> {
        if (episodes.length > 0) {
            try {
                for (let episode of episodes) {
                    await this.connection('episode').insert(this.episodeEntityMapper.entityToModel(episode, seriesId));
                }
                return true;
            } catch (err) {
                console.log(err);
                return false;
            }
        }
        return false;
    }
}