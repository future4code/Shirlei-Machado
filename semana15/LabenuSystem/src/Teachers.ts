import { User } from "./user";
import * as moment from 'moment';

export class Teachers implements User{
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public specialties: TEACHER_SPECIALTY[]
    ){}
    
}

export enum TEACHER_SPECIALTY {
    REACT = "REACT",
    REDUX = "REDUX",
    CSS = "CSS",
    TESTES = "TESTES",
    TYPESCRIPT = "TYPESCRIPT",
    OOP = "OOP",
    BACKEND = "BACKEND"
}