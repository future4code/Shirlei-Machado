import {FileManager} from "./FileManager";
import { student1, student2, student3, student4 } from "./student";
import { teacher1, teacher2, teacher3 } from "./Teachers";
import { fullTimeMission } from "./FullTimeMission";
import { nightMission } from "./NightMission";

const fm = new FileManager('studens.json');

fm.registerInJason(student1);
fm.registerInJason(student2);
fm.registerInJason(student3);
fm.registerInJason(student4);

fm.setFilePath('teacher.json');

fm.registerInJason(teacher1);
fm.registerInJason(teacher2);
fm.registerInJason(teacher3);

fm.setFilePath('Missions.json');

fullTimeMission.setName('Belezinha');
fullTimeMission.addStudent(student1);
fullTimeMission.addStudent(student2);
fullTimeMission.addTeacher(teacher1);

fm.registerInJason(fullTimeMission);

nightMission.setName('Bananinha')
nightMission.addStudent(student3);
nightMission.addStudent(student4);
nightMission.addTeacher(teacher2);
nightMission.addTeacher(teacher3);

fm.registerInJason(nightMission);



