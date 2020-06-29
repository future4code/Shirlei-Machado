import axios from 'axios'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews"

//Exercício 1
//a
//Deve ser utilziado o endpoint /subscribers/all, utilizando o método get

//b
//Para iniciar uma função assíncrona que retorna um array de qualquer coisa,
//primeiro temos que lembrar que o async retorna uma promise, e dentro dela,
//colocamos o tipo de dado de retorno. No caso, Promise<any[]>

//c
// async function pegarAssinantes(): Promise<any[]>{
//     try{
//         const assinantes = await axios.get(`${baseUrl}/subscribers/all`)
//         return assinantes.data;
//     }
//     catch(error){
//         console.log(error);
//     }
// }


//Exercício 2
//a
//Numa função nomeada, já é declarada a assincronicidade antes da própria função
//Numa arrow function, declaramos que ela é assíncrona antes dos parâmetros da função

//b
// const pegarAssinantes = async (): Promise<any[]> =>{
//     try{
//         const assinantes = await axios.get(`${baseUrl}/subscribers/all`)
//         return assinantes.data;
//     }
//     catch(error){
//         console.log(error);
//     }
// }