"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mission = void 0;
class Mission {
    constructor(id, startDate, endDate, teachers, students, currentModule) {
        this.id = id;
        this.startDate = startDate;
        this.endDate = endDate;
        this.teachers = teachers;
        this.students = students;
        this.currentModule = currentModule;
        this.name = "";
    }
    setName(name) {
        this.name = name;
    }
    addStudent(student) {
        this.students.push(student);
    }
    addTeacher(teachers) {
        this.teachers.push(teachers);
    }
}
exports.Mission = Mission;
//# sourceMappingURL=Mission.js.map