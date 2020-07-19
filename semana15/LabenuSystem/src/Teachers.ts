import { User } from "./user";


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


export const teacher1 = new Teachers('1','Goli', 'goli@labenu.com,br', [TEACHER_SPECIALTY.BACKEND, TEACHER_SPECIALTY.TYPESCRIPT, TEACHER_SPECIALTY.OOP]);
export const teacher2 = new Teachers('2','Soter', 'soter@labenu.com,br', [TEACHER_SPECIALTY.CSS, TEACHER_SPECIALTY.REACT, TEACHER_SPECIALTY.REDUX]);
export const teacher3 = new Teachers('3','Darvas', 'darvas@labenu.com,br', [TEACHER_SPECIALTY.BACKEND, TEACHER_SPECIALTY.TESTES, TEACHER_SPECIALTY.REACT]);
