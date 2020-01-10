import { CreateSeriesDatabaseGateway } from '../gateways/CreateSeriesDatabaseGateway';
import { Series } from '../entities/Series';
import { Episode } from '../entities/Episode';
import { generateRandomId } from '../utils/generateRandomId';



export class CreateSeriesUseCase {
    private databaseGateway: CreateSeriesDatabaseGateway;

    constructor(databaseGateway: CreateSeriesDatabaseGateway) {
        this.databaseGateway = databaseGateway;
    }

    public async execute(series: CreateSeriesInput) {


        if (series.episodes.length > 0) {
            const episodies = series.episodes.map(ep => {
                return new Episode(generateRandomId(), ep.title, ep.length, ep.link, ep.picture, ep.synopsis);
            });

            const newSeries = new Series(generateRandomId(), series.title, series.date, series.synopsis, series.link, series.picture, episodies);
            let result: boolean;
            try {
                await this.databaseGateway.insertSeries(newSeries);
                await this.databaseGateway.insertEpisodes(episodies);
            }
            catch (err) {
                console.log(err);
            }
        }
        return result;

    }
}

export interface CreateSeriesInput {
    title: string;
    date: Date;
    synopsis: string;
    link: string;
    picture: string;
    episodes: EpisodeInput[]
}

interface EpisodeInput {
    title: string;
    length: string;
    link: string;
    picture: string;
    synopsis: string;
}