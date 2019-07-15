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
            
        } 
      ).join(' ')
    )
}

translate('lena')


//проверка парности скобок
 

function compareBrack (brack) {
    let newArr = []
    let pares = new Set ('{', '[', '(', ')', ']', '}')
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
console.log(compareBrack('([{}])'))

let checkLength = function(bracket, a, b){
    return (bracket.match(a) || [] ).length === (bracket.match(b) || [] ).length;
};
let comparedBrackets = function(bracket){
    let arr = [ 
        [ /\(/g, /\)/g ], [ /\{/g, /\}/g ], [ /\[/g, /\]/g ] 
    ], 
    i = arr.length
    isClean = true;

    while( i-- && isClean ){
        isClean = checkLength( bracket, arr[i][0], arr[i][1] );
    }
    return isClean;

};
console.log(comparedBrackets('({[{}]})'))

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
  numbers =  (numbers + '').split('').reverse() 
    indexOfNonZeroNumber = numbers.findIndex((el) => {
        return el !== '0' 
        
    })
   numbers.splice(0,  indexOfNonZeroNumber)
   return numbers.join('')
}

console.log(reverseNumbers(-1002))

function reversedNumb(numbers) {
    return (
      parseFloat(numbers.toString().split('').reverse().join('')) * Math.sign(numbers)
    )                 
  }
  console.log(reversedNumb(-100))

function Elements (title, prevTitle) {
    this.prev = null
    this.next = null
    this.prevTitle =  prevTitle
    this.title = title
  
    this.setPrev = (el) => {
        this.prev = el
    }
    this.setNext = (el) => {
        this.next = el
    }
    this.setSwap = (el) => {
        let el1 = this
        let el2 = el
        el.prevTitle = el1.title
        this.prevTitle = el2.title
        this.prev = el2.prev
        el.prev = el2.prev
        this.next = el1.next
        el.next = el2.next        
    }   
   
}

let el1 = new Elements('one') 
let el2 = new Elements('two')
let el3 = new Elements('three')
let el4 = new Elements('four')



el1.setNext(el2)
el1.setSwap(el3)
console.log(el1)

el2.setPrev(el1) 
el2.setNext(el3)
el2.setSwap(el4)
console.log(el2)

el3.setPrev(el2)
el3.setSwap(el1)
el3.setNext(el4)
console.log(el3)

el4.setPrev(el3)
el4.setSwap(el2)
console.log(el4)



//рекурсия

function sumTo(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  
  console.log( sumTo(100) );

// бан определенных слов в строке


var names = 'hello, help, help, me, help, Lesha'

var uniqWords = names.split(', ').map((name) => {
    return {
      count: 1,
      name: name
    }
  }).reduce((a, b) => {
    a[b.name] = (a[b.name] || 0) + b.count
    return a
  }, {})

var nonUniqWord = Object.keys(uniqWords).filter((a) => uniqWords[a] > 1).join(' ')

console.log(nonUniqWord)



 