const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 && bool3
console.log("a. ", resultado)
/* false*/

resultado = (bool2 || bool1) && !bool3
console.log("b. ", resultado)
/*false*/

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)
/*true*/

resultado = (resultado && (!bool1 || bool2)) && !bool3
console.log("d. ", resultado)
/*false*/

console.log("e. ", typeof resultado)
/*boolean*/



//segunda questão.

/*a. Array em JavaScript são usados para armazenar vários valores em uma única variável
b.zero
c. .length*/



//d.

let array
console.log('I. ', array)
/*I.  undefined*/

 = null
console.log('II. ', array)
/*II.  null*/

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('III. ', array.length)
/*III.  11*/

let i = 0
console.log('IV. ', array[i], " e ", array[i+1])
/*IV. 3 e 4*/

array[i+1] = 19
const valor = array[i+6]
console.log('V. ', array[i+1], " e ", valor)
/*V.19 e 9*/

i+=1
array[i] = array[i-1]
console.log('VI. ', array[i])
/*VI.3*/

i = array.length - 1
array[i] = array[i-3]
const resultadoC = array[i]%array[1]
console.log('VII. ', resultadoC)
/*VII.1
undefined*/

//1.a

let grausK= (77-32)*5/9+273.15
console.log(grausK+"K")

let grausF = 80*9/5 + 32
console.log(grausF" ºF")

grausF=30*9/5 + 32
grausK=(grausF - 32)*5/9 + 273.15
console.log("30ºC = "grausF+"ºF= "+grausK+"K")

let grausC=prompt("Digite o valor que quer converter")
grausF=grausC*9/5 + 32
grausK=(grausF - 32)*5/9 + 273.15
console.log(grausC+"ºC="+grausF+"ºF="+grausK+"k")


//2.

let nome=prompt("Qual o seu nome?")
console.log("1. Qual o seu nome?")
console.log("Resposta:" + nome)

let nome=prompt("Qual o seu endereço?")
console.log("1. Qual o seu endereço?")
console.log("Resposta:" + endereço)

let nome=prompt("Qual o seu email?")
console.log("1. Qual o seu email?")
console.log("Resposta:" + email)

let nome=prompt("Qual o seu sobrenome?")
console.log("1. Qual o seu sobrenome?")
console.log("Resposta:" + sobrenome)

let nome=prompt("Qual a sua cor favorita?")
console.log("1. Qual a sua cor favorita?")
console.log("Resposta:" + cor)

//3.
let consumo = prompot("Quantos kwh você consome?")
consumo = consumo*0.05;
console.log("O consumo da residencia é de R$ "+consumo)

let desconto = prompt ("Qual a porcentagem do desconto?")
consumo = consumo - (consumo*(desconto/100))
console.log("O consumo da residência com desconto de" +desconto+"%é de R$"+consumo)

consumo = 280*0.05
console.log("O consume equivalente a 280kwh é de R$"+consumo)
desconto = 15
consumo = consumo - (consumo*(desconto/100))
console.log("O consumo da residência com desconto de" +desconto+ "% é R$"+consumo)





