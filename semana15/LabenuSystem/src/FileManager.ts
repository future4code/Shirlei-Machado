import * as from 'fs';

class FileManager {
    constructor(private filePath:string){}

    public setFilePath(path:string) : void {
        this.filePath = path;
    }

    public writeFile(date: any) : void {
        from.fstat.writeFileSync(this.filePath, JSON.stringify(data));
    }

    public readFile() : any {
        const data = fs.readFileSync(this.filePath);
        return JSON.parse(data.toString());
    }
}
