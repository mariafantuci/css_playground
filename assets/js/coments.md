/*
* #coments
*/
type conversion (typecasting)
vs type coersion

* Alterção de um tipo de dado para outro tipo de dado

a diferença entre elas é que uma eu faço a conversão de tipos
de maneira clara, visivel, e a outra o js implicitamente faz a troca

console.log('9' + 5) // coersion

console.log(Number('9') + 5 )

// manipulando String e Números 
let string = "123"
console.log(Number(sting))

//tranformando String em Número
let number = 123
console.log(String(number))

//contar quantos caracteres tem uma palavradas e quantos digitos tem um número
let word = "Um dia vou trabalhar com desenvolvimento"
console.log(word.length)
let number = word.length
console.log(String(number).length) //precisa converter o número em string pois, number não tem o método lenght

// Manipulando strings e Números

//Transformar um número quebrado com 2 casas decimais e trocar pronto por virgula
let number = 43582478.6587412
console.log(number.toFixed(2).replace(".",",")) // o método to fixed devolve uma String

// Manipulando string e Números

// transforme letras em maiusculas em minusculas. e fazendo o oposto

let phrase = "When tomorrow Come";
console.log(phrase.toUpperCase())
console.log(phrase.toLowerCas())
//ou
console.log(phrase.toLowerCase().toUpperCase())