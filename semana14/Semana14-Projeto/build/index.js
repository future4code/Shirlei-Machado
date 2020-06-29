"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const moment = require("moment");
const createAccount = (name, birthDateString, cpf) => {
    const birthDate = moment(birthDateString, "DD/MM/YYYY");
    const today = moment();
    const age = today.diff(birthDate, "years");
    if (age < 18) {
        console.log("Usuário tem que ter mais de 18 anos");
        return;
    }
    const usersFilePath = "users.json";
    const usersFileData = fs.readFileSync(usersFilePath);
    const usersString = usersFileData.toString();
    const users = JSON.parse(usersString);
    const foundUser = users.find((user) => {
        return user.cpf === cpf;
    });
    if (foundUser !== undefined) {
        console.log("Já existe um usuário com esse CPF");
        return;
    }
    users.push({
        name: name,
        birthDate: birthDateString,
        cpf: cpf,
        balance: 0,
        extract: [],
    });
    console.log(users);
    const usersStringified = JSON.stringify(users, null, 2);
    fs.writeFileSync(usersFilePath, usersStringified);
};
const name = process.argv[2];
const date = process.argv[3];
const cpf = process.argv[4];
createAccount(name, date, cpf);
//# sourceMappingURL=index.js.map