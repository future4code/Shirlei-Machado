import * as fs from 'fs';
import { Student } from './student';
import { Teachers } from './Teachers';
import { Mission } from './Mission';

export class FileManager {
    constructor(private filePath:string){}

    public setFilePath(path:string) : void {
        this.filePath = path;
    }

    public writeFile(date: any) : void {
        fs.writeFileSync(this.filePath, JSON.stringify(date, null, 2));
    }

    public readFile() : any {
        const data = fs.readFileSync(this.filePath);
        return JSON.parse(data.toString());
    }

public registerInJason (classIntance: Student | Teachers | Mission){
    let classInstaces: (Student | Teachers | Mission) [] = [];
    try{
        classInstaces = this.readFile();
    } catch (e) {
        if(e) {
            this.writeFile(classInstaces)
        }
    }
    classInstaces.push(classIntance);
    return this.writeFile(classInstaces)
}

}
