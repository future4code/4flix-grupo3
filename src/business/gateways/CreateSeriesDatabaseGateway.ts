import { Series } from '../entities/Series';

export interface CreateSeriesDatabaseGateway{
    insertSeries(series: Series): Promise<boolean>
}