//EXERCÍCIO 1////////////////////////////////////////

//Imprime o número 105
 /* enquanto i for menor que 15 soma-se + 1 ao i e ele imprime a soma do indice + o valor do prox indice até que o ultimo
  valor acrescentado seja o 15. Não sei se consegui explicar direito kkk*/

  //EXERCÍCIO 2//////////////////////////////////////

  //a. O .push adciona valores ao array
 //b. imprime:(4) [10, 15, 25, 30]
 //c. = 3 imprime - (6) [12, 15, 18, 21, 27, 30] 
 //= 4, imprime - [12]

 //DESAFIO 1////////////////
/*ele acrescentou 1 zero para cada linha a partir da 2ª linha, só não entendi esse 3 no final
 0
00
000
0000
3 
*/

//EXERCÍCIO 3/////////////////////////////////////////
/*const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

//a.
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
let maior=array[0], menor=array[0];

for(let numero of array){
    if(numero>maior){
        maior=numero;
    }
    if(numero<menor){
        menor=numero;
    }
}
console.log("O maior número é: ", maior," o menor é: ", menor);
*/

//b.

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
let Narray = []
    for(let numero of array){
        Narray.push(numero/10);
    }
    console.log(Narray);

 //c. Escreva um programa que devolva um novo array contendo, somente, os números pares do array original.
    
