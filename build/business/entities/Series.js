"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Series {
    constructor(title, date, synopsis, link, episodies) {
        this.title = title;
        this.date = date;
        this.synopsis = synopsis;
        this.link = link;
        this.episodies = episodies;
    }
    getTitle() {
        return this.title;
    }
    getDate() {
        return this.date;
    }
    getSynopsis() {
        return this.synopsis;
    }
    getLink() {
        return this.link;
    }
    getEpisodies() {
        return this.episodies;
    }
}
exports.Series = Series;
