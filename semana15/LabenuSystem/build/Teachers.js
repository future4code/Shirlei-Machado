"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teacher3 = exports.teacher2 = exports.teacher1 = exports.TEACHER_SPECIALTY = exports.Teachers = void 0;
class Teachers {
    constructor(id, name, email, specialties) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.specialties = specialties;
    }
}
exports.Teachers = Teachers;
var TEACHER_SPECIALTY;
(function (TEACHER_SPECIALTY) {
    TEACHER_SPECIALTY["REACT"] = "REACT";
    TEACHER_SPECIALTY["REDUX"] = "REDUX";
    TEACHER_SPECIALTY["CSS"] = "CSS";
    TEACHER_SPECIALTY["TESTES"] = "TESTES";
    TEACHER_SPECIALTY["TYPESCRIPT"] = "TYPESCRIPT";
    TEACHER_SPECIALTY["OOP"] = "OOP";
    TEACHER_SPECIALTY["BACKEND"] = "BACKEND";
})(TEACHER_SPECIALTY = exports.TEACHER_SPECIALTY || (exports.TEACHER_SPECIALTY = {}));
exports.teacher1 = new Teachers('1', 'Goli', 'goli@labenu.com,br', [TEACHER_SPECIALTY.BACKEND, TEACHER_SPECIALTY.TYPESCRIPT, TEACHER_SPECIALTY.OOP]);
exports.teacher2 = new Teachers('2', 'Soter', 'soter@labenu.com,br', [TEACHER_SPECIALTY.CSS, TEACHER_SPECIALTY.REACT, TEACHER_SPECIALTY.REDUX]);
exports.teacher3 = new Teachers('3', 'Darvas', 'darvas@labenu.com,br', [TEACHER_SPECIALTY.BACKEND, TEACHER_SPECIALTY.TESTES, TEACHER_SPECIALTY.REACT]);
//# sourceMappingURL=Teachers.js.map