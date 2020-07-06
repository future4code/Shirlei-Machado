import { User } from "./user";
import * as moment from 'moment';

export class Student implements User {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public birthDate: moment.Moment,
        public hobbies: string[]
    ){}

    public getAge (){
        return moment().diff(this.birthDate, "years");
    }
}

export const student1 = new Student('1', 'Joãozinho', 'joaozinho@gmail.com', moment('18/09/1995', 'DD/MM/YYYY'), ['Ler', 'Assistir Filmes']);
export const student2 = new Student('2', 'Zezinho', 'zezinho@gmail.com', moment('10/09/1985', 'DD/MM/YYYY'), ['Comer', 'Correr']);
export const student3 = new Student('3', 'Luizinho', 'luizinho@gmail.com', moment('12/10/1990', 'DD/MM/YYYY'), ['Nadar', 'Cozinhar']);
export const student4 = new Student('4', 'Pedrinho', 'pedrinho@gmail.com', moment('20/03/2000', 'DD/MM/YYYY'), ['Netflix', 'Escrever']);