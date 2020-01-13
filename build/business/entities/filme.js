"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Film {
    constructor(id, title, dateDebut, synopsis, link, duration, imgCover) {
        this.id = id;
        this.title = title;
        this.dateDebut = dateDebut;
        this.synopsis = synopsis;
        this.link = link;
        this.duration = duration;
        this.imgCover = imgCover;
    }
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    getDateDebut() {
        return this.dateDebut;
    }
    getSynopsis() {
        return this.synopsis;
    }
    getLink() {
        return this.link;
    }
    getDuration() {
        return this.duration;
    }
    getImgCover() {
        return this.imgCover;
    }
}
exports.Film = Film;
