import { Episodie } from "./Episodie";

export class Series{
    constructor(
        private title: string,
        private date: Date,
        private synopsis: string,
        private link: string,
        private episodies: Episodie[]){ }

        public getTitle(){
            return this.title;
        }
        public getDate(){
            return this.date;
        }
        public getSynopsis(){
            return this.synopsis;
        }
        public getLink(){
            return this.link;
        }
        public getEpisodies(){
            return this.episodies;
        }
}