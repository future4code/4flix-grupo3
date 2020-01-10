"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Episodie {
    constructor(title, length, link, picture, synopsis) {
        this.title = title;
        this.length = length;
        this.link = link;
        this.picture = picture;
        this.synopsis = synopsis;
    }
    getTitle() {
        return this.title;
    }
    getLength() {
        return this.length;
    }
    getLink() {
        return this.link;
    }
    getPicture() {
        return this.picture;
    }
    getSynopsis() {
        return this.synopsis;
    }
}
exports.Episodie = Episodie;
