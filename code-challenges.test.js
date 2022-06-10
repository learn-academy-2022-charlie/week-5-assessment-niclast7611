// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// const { CodeGenerator } = require("@babel/generator")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

describe('codedMessage', () => {
    it('takes in a string and returns a coded message', () => {
        const secretCodeWord1 = "Lackadaisical"
        // Expected output: "L4ck4d41s1c4l"
        const secretCodeWord2 = "Gobbledygook"
        // Expected output: "G0bbl3dyg00k"
        const secretCodeWord3 = "Eccentric"
        // Expected output: "3cc3ntr1c"
        expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})
// I GOT RED
// FAIL  ./code-challenges.test.js
// codedMessage
//   ✕ takes in a string and returns a coded message (2 ms)

// ● codedMessage › takes in a string and returns a coded message

//   ReferenceError: codedMessage is not defined

// b) Create the function that makes the test pass.

// Psuedo Code
// I will create a function called codedMessage that takes in a string 
//I will then transform the string to an array using .split('')
//I will iterate over the array to see if each index equals aeiou
    //I will iterate over the array with either a higher order function .map() or a for loop
    //I will try to use regex to see if the indexs are equal to {aeio} or I will use a series of conditionals with || (or) in between 
    //If the indexes equal aeio i will replace them with the corresponding number from the prompt
//After all that i will use .join('') to turn the array back to a string 
//return the new string 

// const codedMessage = (string) => {
//     let array = string.split('')
//     for(let i=0; i<array.length; i++){
//         if(array[i] === 'a' || 'A'){
//             array.indexOf(i) = '4'
//         }
//         return array.join('')
//     }
// }



// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.



describe('singLetter', () => {
    it('all the words that contain that particular letter.', () => {
        const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
        const letterA = "a"
        // Expected output: ["Apple", "Banana", "Orange"]
        const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
        const letterE = "e"
        // Expected output: ["Cherry", "Blueberry", "Peach"]
        expect(singLetter(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
        expect(singLetter(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})
// I GOT RED
// FAIL  ./code-challenges.test.js

// singLetter
//   ✕ all the words that contain that particular letter. (1 ms)

// ● singLetter › all the words that contain that particular letter.

//   ReferenceError: singLetter is not defined


// b) Create the function that makes the test pass.

// Psuedo Code
//I will create a function called singLetter that takes in an array of words and a variable that contains a letter
//I then need to iterate over the array of strings and i will use a for loop to do that
//Once i have iterated over i will use a conditional to see if the strings include the given letter
//If the words include the letter then i will push it into an emptyarr that will be at the top of the method
//I will return the emptyarr


// const singLetter = (array , letter) => {
//     let emptyArr = []
//     array.map((value) => {
        
//       if(value.includes(letter)){
//         emptyArr.push(value)
//         }
         
//     })
// return emptyArr 
// }
    


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe('fullHouse', () => {
    it('determines whether or not the array is a “full house”', () => {
        const hand1 = [5, 5, 5, 3, 3]
        // Expected output: true
        const hand2 = [5, 5, 3, 3, 4]
        // Expected output: false
        const hand3 = [5, 5, 5, 5, 4]
        // Expected output: false
        
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)
    })
})

// I GOT RED
// FAIL  ./code-challenges.test.js
// codedMessage
// fullHouse
//   ✕ determines whether or not the array is a “full house”


// ● fullHouse › determines whether or not the array is a “full house”

//     ReferenceError: fullHouse is not defined

// b) Create the function that makes the test pass.
