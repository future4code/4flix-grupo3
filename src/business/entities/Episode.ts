export class Episode {
    constructor(
        private title: string,
        private length: string,
        private link: string,
        private picture: string,
        private synopsis: string
    ) {
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