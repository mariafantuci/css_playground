// manipulando string e arrays

//perare um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, tranforme o array em um texto e onde eram espaços, coloque _

let phrase = "I don't wanna live forever"
let myArray = phrase.split(" ") // vai separa por espaço 

let phraseWithUnderscore = myArray.join("_") // o método join junta os indexes do array, e o argumento o separador 