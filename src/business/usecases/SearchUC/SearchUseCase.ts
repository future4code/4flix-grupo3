import { SearchDatabaseGateway } from '../../gateways/SearchDatabaseGateway';



export class SearchUseCase {
    private databaseGateway: SearchDatabaseGateway;

    constructor(databaseGateway: SearchDatabaseGateway) {
        this.databaseGateway = databaseGateway;
    }

    public async execute(search: SearchInput) {
        if (search.query.length > 0) {
            try {
                const result = await this.databaseGateway.search(search);
                return result;
            } catch (err) {
                console.log(err);
            }
        }
        else {
            throw new Error("Query sem parametro.");
        }
    }
}

export interface SearchInput {
    "query": string;
}

export interface SearchOutput {
    results: Array<
        {
            id: string,
            title: string,
            synopsis: string,
            picture: string,
            type: string
        }
    >
}

