import { Series } from '../entities/Series';
import { Episode } from '../entities/Episode';

export interface CreateSeriesDatabaseGateway {
    insertSeries(series: Series): Promise<boolean>;

    insertEpisodes(episodies: Episode[], seriesID: string): Promise<boolean>;
}