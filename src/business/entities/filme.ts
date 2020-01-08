export class Film {
    constructor(
      private id: string,
      private title: string,
      private dateDebut: string,
      private link: string,
      private duration: string,
      private imgCover: string
    ) {}
  
    public getId() {
      return this.id
    }
  
    public getTitle() {
      return this.title
    }
  
    public getDateDebut() {
      return this.dateDebut
    }
  
    public getLink() {
      return this.link
    }
  
    public getDuration() {
      return this.duration
    }

    public getImgCover() {
        return this.imgCover
      }
  }