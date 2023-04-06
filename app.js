const cowsay = require('cowsay')

const cow = cowsay.say({
    text: 'hello'
})

function captitalise(word){
    let captitalisedWord = []; //set a arr to push changed letters into

    captitalisedWord.push(word[0].toUpperCase()); //first arr value set to uppercase

    for (let i = 1; i < word.length; i++) { //loop starting as second letter
        captitalisedWord.push(word[i].toLowerCase()); //push rest of letters (changed to lowercase) into arr
    }

    return captitalisedWord.join(""); // join the arr into string and return
}

// console.log(captitalise('hEllo'));

const swapcase = (word) => {

    let swappedCase = []; // set arr to push letters into

    for (let i = 0; i < word.length; i++) { //for loop for each char of word
        if (word[i] === word[i].toUpperCase()){
            swappedCase.push(word[i].toLowerCase()); // if letter caps change to lower and push into arr
            // console.log('is uppercase')
        }else{
            swappedCase.push(word[i].toUpperCase()); // reverse the if statement 
            // console.log('is lowercase')
        }
        
    }

    return swappedCase.join(''); // return joined arr
}

// console.log(swapcase('AvGerOu'))

const reverse = function(word) {
    let wordArr = [];

    for (let i = 0; i < word.length; i++) {
        wordArr.push(word[i]);
    }
    let reversedWord = wordArr.reverse();

    return reversedWord.join('')
}

// console.log(reverse("tpircSavaJ"));

// for each char of array 
// push into []
// reverse []
// return [] join (as a string)
// need: arr, forloop

const reverse2 = (word) => {
    let wordArr = [];

    for (const i in word) {
        wordArr.push(word[i]);
    }
    let reversedWord = wordArr.reverse();

    return reversedWord.join('');
}

// console.log(reverse2("tpircSavaJ"));

function upcase(arr) {
    let upcasedArr = [];

    arr.forEach(Element => upcasedArr.push(Element.toUpperCase()));

    return upcasedArr;
}

// console.log(upcase(["e", "f", "g", "h"]));

const downcase = function(arr) {
    let downcased = arr.map(f => f.toLowerCase()); //map creates new array
    // f is a param which = each element of original arr using map
    // param is passed into a function which then get pushed into new arr
    // in this instance we are changing letter to lowercase

    return downcased;
}

// console.log(downcase(["A", "B", "C", "D"]));

function howIndex(arr) {
    return arr.indexOf('how');
}

// console.log(howIndex([ 'hello', 'how', 'are', 'you' ]));

function reverse3(word){
    return word.split('').reverse().join('');
}

// console.log(reverse3("tpircSavaJ"));

const max = (arr) => {
    let maxNumber = arr.reduce((accumulator, currentValue) =>{
        if (currentValue > accumulator) {
            return currentValue;            
        } else {
            return accumulator;
        }
    })

    return maxNumber;
}

// console.log(max([1, 297, -73, 99, 10]));

const shortestString = function(arr) {
    let smallestString = arr.reduce((accumulator, currentValue)=>{
        if (currentValue.length < accumulator.length){
            return currentValue;
        }else{
            return accumulator;
        }
    })

    return smallestString;
}

console.log(shortestString(['I', 'prefer', 'marshmallow', 'to', 'oreo']));
