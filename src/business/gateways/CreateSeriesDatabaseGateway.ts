import { Series } from '../entities/Series';
import { Episode } from '../entities/Episode';

export interface CreateSeriesDatabaseGateway {
    insertSeries(series: Series,episodies: Episode[]): Promise<boolean>;

    insertEpisodes(episodies: Episode[], seriesID: string): Promise<boolean>;
}