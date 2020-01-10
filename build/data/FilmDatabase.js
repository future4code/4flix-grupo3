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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
class FilmEntityMapper {
    entityToModel(entity) {
        return {
            id: entity.getId(),
            title: entity.getTitle(),
            dateDebut: entity.getDateDebut(),
            synopsis: entity.getSynopsis(),
            duration: entity.getDuration(),
            link: entity.getLink(),
            imgCover: entity.getImgCover(),
        };
    }
}
class FilmDatabase {
    constructor() {
        this.connection = knex_1.default({
            client: 'mysql',
            connection: {
                host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
                user: 'caroline',
                password: 'cb1764d745d86007cf0b9bdf1f8b0008',
                database: 'caroline'
            }
        });
        this.FilmEntityMapper = new FilmEntityMapper();
    }
    saveFilm(films) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.connection('filme').insert(this.FilmEntityMapper.entityToModel(films));
                return true;
            }
            catch (err) {
                console.log(err);
                return false;
            }
        });
    }
}
exports.FilmDatabase = FilmDatabase;
