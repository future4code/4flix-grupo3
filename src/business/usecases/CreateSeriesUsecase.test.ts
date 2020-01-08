import { CreateSeriesUseCase, CreateSeriesInput } from './CreateSeriesUseCase';
import { CreateSeriesDatabaseGateway } from '../gateways/CreateSeriesDatabaseGateway';
import { Series } from '../entities/Series';

test("Testar o usecase CreateSeries", async () => {
    const input: CreateSeriesInput = {
        title: "Rick and Morty",
        date: new Date(),
        synopsis: "Rick Sanchez é um cientista genial e alcoólatra que foi morar com a família de sua filha Beth, uma cirurgiã cardíaca de equinos. Ele divide seu tempo entre desenvolver projetos altamente tecnológicos em seu laboratório (garagem da casa de Beth) e levar seu neto de 14 anos Morty em aventuras perigosas e surreais pelo Multiverso. Combinados com tensões preexistentes dentro da família, esses eventos causam ao sensível Morty muito angústia em casa e na escola.",
        link: "www.linkfalso.com",
        picture: "www.linkfalso.com",
        episodes: [
            {
                title: "Pilot",
                length: "22 min",
                link: "www.linkfalso.com.br",
                picture: "www.linkfalso.com",
                synopsis: "Rick leva morty em uma aventura em outra dimensão para achar sementes das 'mega árvores'",
            },
            {
                title: "Lawnmower Dog",
                length: "21 min",
                link: "www.linkfalso.com.br",
                picture: "www.linkfalso.com",
                synopsis: "Rick cria um dispositivo que deixa o cachorro da família mais inteligente. Além disso, ele também invade os sonhos do professor de matemática do Morty",
            }
        ]
    }

    const gateway: CreateSeriesDatabaseGateway = {
        insertSeries(series: Series) {
            return Promise.resolve(true);
        }
    }

    const useCase = new CreateSeriesUseCase(gateway);

    const result = await useCase.execute(input);

    expect(result).toBe(true);
});