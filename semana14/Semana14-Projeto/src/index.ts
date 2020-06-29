import * as fs from "fs";
import * as moment from 'moment';
moment.locale("pt-br")


type ExtractItem = {
  description: string;
  value: number;
  date: string;
};

type Account = {
  name: string;
  birthDate: string;
  cpf: string;
  balance: number;
  extract: ExtractItem[];
};

const createAccount = (name: string, birthDateString: string, cpf: string) => {
  
  const birthDate = moment(birthDateString, "DD/MM/YYYY");
  const today = moment();
  const age = today.diff(birthDate, "years");
  if (age < 18) {
    console.log("Usuário tem que ter mais de 18 anos");
    return;
  }
  
  const usersFilePath = "users.json";
  const usersFileData: Buffer = fs.readFileSync(usersFilePath);
  const usersString: string = usersFileData.toString();
  
  const users: Account[] = JSON.parse(usersString);
 
  const foundUser = users.find((user: Account) => {
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