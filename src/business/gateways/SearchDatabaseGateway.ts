import { SearchInput, SearchOutput } from "../usecases/SearchUC/SearchUseCase";


export interface SearchDatabaseGateway{
    search(query: SearchInput): Promise<SearchOutput>;
}