import { CreateSeriesInput, CreateSeriesUseCase } from "../../business/usecases/CreateSeriesUseCase"
import { Request, Response } from 'express'
import { SeriesDatabase } from '../../data/SeriesDatabase';

export async function createSeriesEndPoint(req: Request, res: Response) {
    try {
        const date = Date.parse(req.body.date);
        const createSeriesInput: CreateSeriesInput = {
            title: req.body.title,
            date: new Date(date),
            synopsis: req.body.synopsis,
            link: req.body.link,
            picture: req.body.picture,
            episodes: req.body.episodes
        }

        const createSeriesUC = new CreateSeriesUseCase(new SeriesDatabase());

        const result = await createSeriesUC.execute(createSeriesInput);

        if (result) {
            res.send({ message: "Series created successfully." });
        }
        else {
            res.status(500).send({ message: "Series not created." });
        }
    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
}