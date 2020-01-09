import { CreateSeriesDatabaseGateway } from '../business/gateways/CreateSeriesDatabaseGateway';
import { Series } from '../business/entities/Series';

//Stub
export class SeriesDatabase implements CreateSeriesDatabaseGateway{
    async insertSeries(series: Series){
        return Promise.resolve(true)
    }
}