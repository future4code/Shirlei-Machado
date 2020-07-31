export class createBanda{
    constructor(
    private id: string,
    private name: string,
    private music_genre: string,
    private responsible: string
    ){}

    getId(){
        return this.id;
    }

    getName(){
        return this.name
    }

    getmusic_genre(){
        return this.music_genre;
    }

    getresponsible(){
        return this.responsible;
    }

    setId(id: string){
        this.id = id;
    }

    setName(name: string){
        this.name = name;
    }

    setMusic_genre(music_genre: string){
        this.music_genre = music_genre;
    }

    setResponsible(responsible: string){
        this.responsible = responsible;
    }
 

   static stringToBandaResponsible(input: string): BandaResposible{
        switch (input) {
            case "NORMAL":
              return BandaResposible.NORMAL;
            case "ADMIN":
              return BandaResposible.ADMIN;
            default:
              throw new Error("Invalid banda Responsible");
          }
    }

    static toBandaModel(createBanda: any): createBanda {
        return new createBanda(createBanda.id, createBanda.name, 
            createBanda.music_genre, createBanda.responsible, 
            createBanda.stringBandaResponsible(createBanda.responsible));
      }
}

export interface BandaInputDTO{
    id: string;
    name: string;
    music_genre: string;
    responsible: string;
}

export interface LoginInputDTO{
    email: string;
    password: string;
}

export enum BandaResposible{
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}