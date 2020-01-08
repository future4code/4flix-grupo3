import { CreateSeriesDatabaseGateway } from '../gateways/CreateSeriesDatabaseGateway';
import { Series } from '../entities/Series';
import { Episodie } from '../entities/Episodie';

export class CreateSeriesUseCase {
    private databaseGateway: CreateSeriesDatabaseGateway;

    constructor(databaseGateway: CreateSeriesDatabaseGateway) {
        this.databaseGateway = databaseGateway;
    }

    public async execute(series: CreateSeriesInput) {
        const episodies = series.episodes.map(ep => {
            return new Episodie(ep.title, ep.length, ep.link, ep.picture, ep.synopsis)
        });

        const newSeries = new Series(series.title, series.date, series.synopsis, series.link, episodies);

        const result = await this.databaseGateway.insertSeries(newSeries);

        return result;
    }
}

export interface CreateSeriesInput {
    title: string;
    date: Date;
    synopsis: string;
    link: string;
    picture: string;
    episodes: EpisodieInput[]
}

interface EpisodieInput {
    title: string;
    length: string;
    link: string;
    picture: string;
    synopsis: string;
}