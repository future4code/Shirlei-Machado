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
//pq console.log ta fora do escopo.

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

const numero1 = Number(prompt("Digite o primeiro número."));
const numero2 = Number(prompt("Digite o próximo número."));
const numero3 = Number(prompt("Digite o próximo número."));

if(numero1 === numero2 && numero1 === numero3 && numero2 === numero3){
  console.log("insira numeros diferentes")
}
else {
  console.log("OK");
}



//Exercício 5
//a. https://drive.google.com/drive/u/0/my-drive
//b. 

let ossos = prompt("Possuem ossos? [s/n]");
 switch (ossos) {
   case "s":
     console.log("vertebrados")
    break;
    
     case "n":
     console.log("invertebrados")
    break;
  }

  let pelo = prompt("Possuem pelos? [s/n]");
  switch (pelo) {
    case "s":
      console.log("mamifero")
      break;
      
    case "n":
      console.log("Não é um mamífero, pode ser uma ave!")
      break;
  }

  let racional = prompt ("É um animal racional? [s/n]");
  switch (racional) {
    case "s":
        console.log("Mamífero não humano")
        break;

    case "n":
        console.log("Ser Humano!") 
        break;
  }







const animalOsso = prompt("O animal tem ossos? [s/n]")
    if(animalOsso === "s"){
const animalPelo = prompt("O animal tem pelos? [s/n]")
    if(animalPelo === "s"){
const animalRacional = prompt("O animal é racional? [s/n]")
    if(animalRacional === "s"){
console.log("O animal é um ser humano")




const animalPelo = prompt("O animal tem pelos? [s/n]");
const animalRacional = prompt("O animal é racional? [s/n]");




const ossos = prompt("O animal tem ossos? [s/n]")
if(ossos === "s"){
    const pelos = prompt("O animal tem pelos? [s/n]")
    if(pelos === "s"){
        const racional = prompt("O animal é racional? [s/n]")
        if(racional === "s"){
            console.log("O animal é um ser humano")
        }
        else{
            console.log("O animal é um mamífero não humano")
        }
    }
    else{
        const penas = prompt("O animal tem penas? [s/n]")
        if(penas === "s"){
            console.log("O animal é uma ave")
        }
        else{
            const terreste = prompt("O animal é terreste? [s/n]")
            if(terreste === "s"){
                const anfibio = prompt("O animal passa parte da vida em ambiente aquático? [s/n]")
                if(anfibio==="s"){
                    console.log("O animal é um anfíbio")
                }
                else{
                    console.log("O animal é um réptil")
                }
            }
            else{
                console.log("O animal é um peixe")
            }
        }
    }
}
else{
    console.log("Animal invertebrado")






