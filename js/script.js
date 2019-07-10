//считает количество знаков последнего слова
function lastWord (word) {
    console.log(word.split(' ').reverse()[0].length)
    
}
lastWord('Hello Lesha Maysick')

//вместо пробелов вставляет запятые
function replaceSpasesWithComa (sentence) {
    console.log(sentence.split(' ').join(', '))
}
replaceSpasesWithComa('My my hello allo')

//вместо запятых вставляет пробелы
console.log('2,4,5,7,5'.replace(/,/g, ' '))

//генерация рандрмного числа от 1 до 10, до 50
function randomNumbers (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomNumbers(1, 10))
var random = Math.floor(Math.random() * 50)
console.log(random)


//все слова в строке с большой буквы
function toFirstWord (firstWord) {
 console.log(firstWord.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' '))

}
toFirstWord('cat dog fish')

//просто дата
var date = new Date()
console.log(date)


//удаляет лишние пробелы в строке

function deleteSpases (spases) {
    console.log(spases) 
}
deleteSpases('go    to         hell adam'.replace(/\s+/g,' ').trim())


function deleteSpasesTwo (spases) {
    console.log(spases.split(' ').sort().join(' ').trim())
}
deleteSpasesTwo('Hello    my   cat')

//перевод обычного текста в азбуку Морзе

var morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

function translate (word) {
    
        console.log(word.split('').map( (letter) => {
            let newCharCode = letter.charCodeAt() - 97
            return morse[newCharCode]
        } ))
    }

translate('lena')

//проверка парности скобок


function compareBrack (brack) {
    let newArr = []
    let pares = new Set ('{', '[', '(')
    let paresObj = {
        ')':'(',
        '}':'{',
        ']':'['
    }

    for(let c of brack) { 
        if (pares.has(c)) {
            newArr.push(c)
        } else if (paresObj[c] && newArr.pop() !== paresObj[c]) {
            return false
        }

    }

    return !newArr.length
    
}
console.log(compareBrack('{}'))

//самоделяющиеся числа 

function selfDividing(left, right) {
    var arrResults = []
    for (let i = left; i <= right; i++) {
        arrResults.push(i)
    }
    return result = arrResults.reduce(function(numberDivided, current){
        var number = current + left
        for (var i in number.toString()){
            let divide = number.toString()[i]
            if (divide === 0 || number % divide !== 0 ){
                return numberDivided
            }
        }
        numberDivided.push(number)
        return numberDivided
    },
    [])
}
console.log(selfDividing(1, 50))

//ревёрс чисел с условием 1000 => 0001 => 1



function reverseNumbers(numbers) {
    numbers = (numbers + '').split('').reverse()
    indexOfNonZeroNumber = numbers.findIndex((el) => {
        return el !== '0'
    })
   numbers.splice(0,  indexOfNonZeroNumber)
   return numbers.join('') 
}

console.log(reverseNumbers(1001))
