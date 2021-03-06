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

// Psuedo Code first go failed new Psuedo Code below 
// I will create a function called codedMessage that takes in a string 
//I will then transform the string to an array using .split('')
//I will iterate over the array to see if each index equals aeiou
    //I will iterate over the array with either a higher order function .map() or a for loop
    //I will try to use regex to see if the indexs are equal to {aeio} or I will use a series of conditionals with || (or) in between 
    //If the indexes equal aeio i will replace them with the corresponding number from the prompt
//After all that i will use .join('') to turn the array back to a string 
//return the new string 

// I ended up scratching that idea because I ran into a wall and I found a string method called .replace and used that to solve the problem and simpler 
// So i created a function called codedMessage that takes in a string as an argument
// I then looped over each index of the string using a for loop
// Once i looped over it i made a new varibale where i lowercased the first letter and sliced the string back together I called this variable stringLower
// I then set a new variable equal to stringLower and appended the replaceAll method with the arguments needed in this case 'a' and replaced it with '4'
    // i set that equal to newString 
// I did that same thing for e i and o setting each them equal to newString 1-3
//  at the end i capitalized the first index of the string and returned that line 


const codedMessage = (string) => {
    for(let i=0; i<string.length; i++){
     let stringLower = string[0].toLowerCase() + string.slice(1)

        let newString =  stringLower.replaceAll('a', '4')
        let newString1 = newString.replaceAll('e', '3')
        let newString2 = newString1.replaceAll('i', '1')
       let newString3 = newString2.replaceAll('o', '0')
       return newString3[0].toUpperCase() + newString3.slice(1)
  
     }
}
// I GOT GREEN 
// PASS  ./code-challenges.test.js
// codedMessage
//   ✓ takes in a string and returns a coded message (2 ms)




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
    // or .filter because it always returns a filter of less size and has a condtional built in 
    //I might need to .split() the strings into arrays to iterate over that
//Once i have iterated over i will use a conditional to see if the strings include the given letter
//If the words include the letter then i will push it into an emptyarr that will be at the top of the method
//I will return the emptyarr

// i tried several different ways but this is the one that I got closest to getting right 
// +   false,
// +   true,
// +   false,
// +   true,
// +   false,
// I just need to figure out how to get the value not a boolean 
// if i could get some feed back on how to continue this problem that would help me alot 
const singLetter = (array, letter) => array.filter(value => 
    value.toLowerCase().indexOf(letter) !== -1)

    // I GOT GREEN
    // PASS  ./code-challenges.test.js
    // codedMessage
    //   ✓ takes in a string and returns a coded message (7 ms)
    // singLetter
    //   ✓ all the words that contain that particular letter. (1 ms)
    // fullHouse
    //   ✓ determines whether or not the array is a “full house” (1 ms)

    //After asking a classmate I forgot that i didnt need to create a new array if i was using .filter because it returns a new array already. 
  


    


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

// Psuedo Code Not very dynamic only works for 3 and 5 maybe try to go back and refactor ****
// create a function called fullHouse that takes in an array of numbers
//i need to create two variables one called count5 and the other called count3 both set to zero
    //This is to count the number of times 5 and 3 are in the array of nums
//I then need to iterate over the array using a for loop 
    //Inside that loop i need a conditional saying if the index of arrNums is equal to 3 or 5 add 1 to their individual counts
//I then need another conditional seeing if the count reaches 3 and 2 if it does return true else return false.

const fullHouse = (arrNums) => {
    let count5 = 0
    let count3 = 0
    for(let i= 0; i<arrNums.length; i++)
    if(arrNums[i] === 5){
        count5 += 1
    }
    else if(arrNums[i] === 3){
        count3 += 1 
    }
    if(count5 === 3 && count3 === 2){
        return true 
    }
    else {
        return false 
    }
    
}
// I GOT GREEN 
// FAIL  ./code-challenges.test.js
// codedMessage
//   ✓ takes in a string and returns a coded message (3 ms)
// fullHouse
//   ✓ determines whether or not the array is a “full house” (1 ms)
