"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.student4 = exports.student3 = exports.student2 = exports.student1 = exports.Student = void 0;
const moment = require("moment");
class Student {
    constructor(id, name, email, birthDate, hobbies) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.birthDate = birthDate;
        this.hobbies = hobbies;
    }
    getAge() {
        return moment().diff(this.birthDate, "years");
    }
}
exports.Student = Student;
exports.student1 = new Student('1', 'Joãozinho', 'joaozinho@gmail.com', moment('18/09/1995', 'DD/MM/YYYY'), ['Ler', 'Assistir Filmes']);
exports.student2 = new Student('2', 'Zezinho', 'zezinho@gmail.com', moment('10/09/1985', 'DD/MM/YYYY'), ['Comer', 'Correr']);
exports.student3 = new Student('3', 'Luizinho', 'luizinho@gmail.com', moment('12/10/1990', 'DD/MM/YYYY'), ['Nadar', 'Cozinhar']);
exports.student4 = new Student('4', 'Pedrinho', 'pedrinho@gmail.com', moment('20/03/2000', 'DD/MM/YYYY'), ['Netflix', 'Escrever']);
//# sourceMappingURL=student.js.map