"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileManager = void 0;
const fs = require("fs");
class FileManager {
    constructor(filePath) {
        this.filePath = filePath;
    }
    setFilePath(path) {
        this.filePath = path;
    }
    writeFile(date) {
        fs.writeFileSync(this.filePath, JSON.stringify(date, null, 2));
    }
    readFile() {
        const data = fs.readFileSync(this.filePath);
        return JSON.parse(data.toString());
    }
    registerInJason(classIntance) {
        let classInstaces = [];
        try {
            classInstaces = this.readFile();
        }
        catch (e) {
            if (e) {
                this.writeFile(classInstaces);
            }
        }
        classInstaces.push(classIntance);
        return this.writeFile(classInstaces);
    }
}
exports.FileManager = FileManager;
//# sourceMappingURL=FileManager.js.map