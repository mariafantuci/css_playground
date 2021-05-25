// Manipulando Arrays

//criar Array com construtor
let myArray = [
    'a',
    {type: "array"}, 
    function() {return "alo"}] //no array pode ter qualquer tipo de dado
console.log(myArray[2].length) //quantas quantos elementos tem o array
//
console.log(myArray[2]()) //executando a função

//*******************
//transformar uma cadeia de caracteres em elementos de um array

let word = "manipulação"
console.log(Array.from(word)) //separa uma string nas posições de um array


let techs = ["html", "css", "js"]
//Adicionar um item no fim
console.log(techs.push("node.js"))
//adicionar no começo
console.log(techs.unshift("sql"))
//remover do fim
console.log(techs.pop())
//remover do começo
console.log(techs.shift)
//pegar somente alguns elementos do array
console.log(techs)
//remover 1 ou mais items em qualquer posição do array
console.log(techs)
//encontrar a posição de um elemento no array
console.log(techs.slice(1, 3))
//remover 1 ou mai items em qualquer posição do array
console.log(techs.splice(1, 1))
//encontrar a posição de um elemento no array
let position = techs.indexOf('css')
console.log(techs.splice(position, 1))

// crie um algoritmo que transforme as notas do sistema número para o sistema de notas em caracteres a, b, c

function getScore (score){
    let scoreNumber = score;
    let scoreChar = "";
    if(scoreNumber >= 90){
        scoreChar = 'A'
    } else if(scoreNumber >= 80){
        scoreChar = 'B'
    }else if(scoreNumber >= 70){
        scoreChar = 'C'
    }else if(scoreNumber >= 60){
        scoreChar = 'D'
    }else{
        scoreChar = 'F'
    }
    return scoreChar;
  }
  //let score = 91
  //console.log('a nota em caracteres é ' + getScore(score))

function conversionTemperature(temperature){
    const celsiusExists = temperature.toUpperCase.includes('C')
    const fahrenheiExists = temperature.toUpperCase.includes('F')
    if(!celsiusExists || !fahrenheiExists){
        throw new Error('Grau não identificado')
    }
    let formula = (fahrenhei) => (fahrenhei - 32) * 5/9
    let degreeSign = 'C'
}
try {
    conversionTemperature('90c')
} catch (error) {
    console.log(error.message)
}