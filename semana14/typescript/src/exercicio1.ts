//a - Quando coloco um número sou informada que ele não é uma string. Comentei o número e coloquei o 
//texto 

const minhaString : string = "string" //2

//b - Para ela aceitar letras usamos | string

const meuNumero : number = 2;

// c - 

type pessoa = {
    nome: string;
    idade: number;
    corFavorita: string;
}

//d - 
 const pessoa1 : pessoa = {
     nome: "Bob",
     idade: 55,
     corFavorita: "verde"
 }

 const pessoa2 : pessoa = {
    nome: "Alice",
    idade: 15,
    corFavorita: "azul"
}

const pessoa3 : pessoa = {
    nome: "Bananinha",
    idade: 30,
    corFavorita: "amarelo"
}

//e -
enum cores {
    AZUL= "azul",
    VERMELHO = "Vermelho",
    LARANJA = "laranja",
    INDIGO = "indigo",
    AMARELO = "amarelo",
    VERDE = "verde",
    VIOLETA = 'violeta'
    }