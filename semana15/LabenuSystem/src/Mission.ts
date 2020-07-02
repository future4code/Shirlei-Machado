import * as moment from 'moment';
import { Teachers } from "./Teachers";
import { Student } from "./student";

export abstract class Mission {
    private name: string = "";
    constructor(
        private id: string,
        private startDate: moment.Moment,
        private endDate:moment.Moment,
        private teachers: Teachers[],
        private students: Student[],
        private currentModule?: number
    ){}

      public setName(name:string){
          this.name = name;
      }  

      public addStudent(student:Student){
          this.students.push(student)
      }

      public addTeacher(teachers:Teachers){
          this.teachers.push(teachers)
      }
}