"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createFilm_1 = require("./createFilm");
const app = express_1.default();
app.use(express_1.default.json()); // Linha mágica (middleware)
app.post('/createfilms', createFilm_1.createFilmsEndPoint);
exports.default = app;
