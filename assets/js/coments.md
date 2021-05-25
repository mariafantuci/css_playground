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


// manipulando string e arrays

//perare um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, tranforme o array em um texto e onde eram espaços, coloque _

let phrase = "I don't wanna live forever"
let myArray = phrase.split(" ") // vai separa por espaço 

let phraseWithUnderscore = myArray.join("_") // o método join junta os indexes do array, e o argumento o separador 

// verificar se o texto contém uma palavra específica

let phrase = "I just wanna live"
console.log(phrase.includes("amor")) //o método includes verifica se tem em uma frase, ela é case sensitive


# Operadores de Procedencia
# Operator precedence

* grouping ()
* negação e incremento ! ++ --
* multiplicação e divisão * /
* adição e subtração + -
* relacional < <= > >=
* igualdade == != === !==
* AND &&
* OR ||
* condicional :?
* assignment (atribuição) = += -= *=


# estrutura de repetição
# for (sabemos a quantidade de vezes que vai repetir)
//break para a execução
//continue pula a execução do momento
* for(let i = 1; i <= 10; i++){
    console.log('6' + 'x' + i + ' = ' + (6 * i))
}

# while não sabemos o momento da parada
* let i = 0
* while (i < 10){
    console.log(i)
    i++;
}

# for...of
let name = 'maria'
let names = ['harley', 'ivy', 'bob']
for(let char of name) {
    console.log(name) // mostra as letras separadas
}
for(let name of names) {
    console.log(name) //mostra os nomes dentro do array
}

# for...in
let person = {
    name: 'jhon',
    age: 64,
    weight: 70.9,
}
for(let property in person){
    console.log(property)
    console.log(person.name)
}