export class Episodie {
    constructor(
        private title: string,
        private length: string,
        private link: string,
        private picture: string,
        private synopsis: string
    ) { }

    public getTitle() {
        return this.title;
    }
    public getLength() {
        return this.length;
    }
    public getLink() {
        return this.link;
    }
    public getPicture() {
        return this.picture;
    }
    public getSynopsis() {
        return this.synopsis;
    }
}