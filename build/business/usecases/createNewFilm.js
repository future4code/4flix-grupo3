"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const filme_1 = require("../entities/filme");
class CreateFilmsUseCase {
    constructor(databaseGateway) {
        this.databaseGateway = databaseGateway;
    }
    execute(film) {
        return __awaiter(this, void 0, void 0, function* () {
            const newFilms = new filme_1.Film(film.id, film.title, film.dateDebut, film.synopsis, film.link, film.duration, film.imgCover);
            const result = yield this.databaseGateway.saveFilm(newFilms);
            return result;
        });
    }
}
exports.CreateFilmsUseCase = CreateFilmsUseCase;
