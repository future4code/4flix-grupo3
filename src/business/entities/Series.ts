import { Episode } from "./Episode";

export class Series {
    constructor(
        private title: string,
        private date: Date,
        private synopsis: string,
        private link: string,
        private episodies: Episode[]) {
        if (title.length < 2) {
            throw new Error("Titulo inválido.");
        }
        if (synopsis.length < 10) {
            throw new Error("Sinopse inválida.");
        }
        if (link.length < 7) {
            throw new Error("Link inválido.");
        }
    }

    public getTitle() {
        return this.title;
    }
    public getDate() {
        return this.date;
    }
    public getSynopsis() {
        return this.synopsis;
    }
    public getLink() {
        return this.link;
    }
    public getEpisodies() {
        return this.episodies;
    }
}