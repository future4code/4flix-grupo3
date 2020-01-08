export class Filme {
    constructor(
      private id: string,
      private titulo: string,
      private dataDeEstreia: Date,
      private link: string,
      private duracao: string,
      private imgCapa: string
    ) {}
  
    public getId() {
      return this.id
    }
  
    public getTitulo() {
      return this.titulo
    }
  
    public getDataDeEstreia() {
      return this.dataDeEstreia
    }
  
    public getLink() {
      return this.link
    }
  
    public getDuracao() {
      return this.duracao
    }

    public getImgCapa() {
        return this.imgCapa
      }
  }