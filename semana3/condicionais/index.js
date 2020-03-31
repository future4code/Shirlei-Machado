// /*1ª questão*/

 const respostaDoUsuario = prompt("Digite o número que você quer testar?")
 const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
   console.log("Passou no teste.")
 } else {
      console.log("Não passou no teste.")
 }
 /* O codigo está testando se o que resta dos números é igual a zero*/

 /*2ªquestão*/
 let fruta = prompt("Escolha uma fruta")
 let preco
 switch (fruta) {
   case "Laranja":
     preco = 3.5
     break;
   case "Maçã":
     preco = 2.25
     break;
   case "Uva":
     preco = 0.30
     break;
   case "Pêra":
    preco = 5.5
     break; // BREAK PARA O ITEM d.
   default:
     preco = 5
     break;
 }
 console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//a. para informar o valor das frutas
//b. O preço da fruta  Maça  é  R$  5
//c. Se eu levar em consideração o case sensitive, todos cairiam no default e custariam R$5,00 cada.
// Se não, somentente a Banana seria default e custaria R$5,00 cada.
//d. O preço da fruta  Pêra  é  R$  5. ou seja, o mesmo valor do default.


//Exercício 3
// mensagem de erro: VM121:13 Uncaught ReferenceError: mensagem is not defined at <anonymous>:13:13

 const numero1 = prompt("Digite o primeiro número.")
 const numero2 = prompt("Digite o próximo número.")

 if(numero1 > 0 && numero2 > 0) {
   let mensagem
   if(numero1 > numero2) {
      
     mensagem = "Número 1 é maior que o 2!"
   } else {
     mensagem = "Número 1 é menor ou igual ao 2!"
   }
}

 console.log(mensagem)


// Exercício 4

//a.

 const numero1 = Number(prompt("Digite o primeiro número:"))
 const numero2 = Number(prompt("Digite o segundo número:"))

 if (numero1 > numero2){
     console.log (numero1 + "," + numero2)
 }

 else if (numero1 < numero2){
    console.log (numero1 + "," + numero2)
}


//b. Se os 3 forem iguais, aparece os 3 mais se só o 1 e o 2 forem iguais aparecem os 3 numeros mais a mensagem 
// que os dois são iguais. 

const numero1 = Number(prompt("Digite o primeiro número:"))
const numero2 = Number(prompt("Digite o segundo número:"))
const numero3 = Number(prompt("Digite o terceiro número:"))

if (numero1 > numero2 > numero3){
    console.log (numero1 + "," + numero2+ ","+ numero3)
}

else if (numero1 < numero2 < numero3){
    console.log (numero1 + "," + numero2+ ","+ numero3)
}
if((numero1 === numero2) && (numero2>numero3)) {
    console.log(numero1 + "," + numero2 + "São iguais")
}


//c. 





//Exercício 5





