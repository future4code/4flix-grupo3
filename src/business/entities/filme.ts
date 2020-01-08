export class Filme {
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
  
    public getDuracao() {
      return this.duration
    }

    public getImgCapa() {
        return this.imgCover
      }
  }