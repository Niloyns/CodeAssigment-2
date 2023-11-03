
// ASSIGHMENT DAY 2


// Assigment 1


function number(num){
    if (num > 0 ) {
        console.log(`${num} is positive`);
    } else if (num < 0) {
        console.log(`${num} is Negative`);
    } else if (num === 0){
        console.log(`${num} is Zero`);
    } else{
        console.log("invalide input");
    }
};

number(parseInt(prompt()));



// Assigment - 2

function number(num){
    if (num < 0) {
        console.log("error");
    }
    
    // if number is 0
    else if (num === 0) {
        console.log(`The factorial of ${num} is 1.`);
    }
    
    // if number is positive
    else {
        let fact = 1;
        for (i = 1; i <= num; i++) {
            fact *= i;
        }
        console.log(`The factorial of ${num} is ${fact}.`);
    }
}

number(prompt())


// Assigment 3

function returnNum(a,b){
    if(a == 0){
        return 0;
    } else if (a < b){
        return b
    } else{
        return a;
    }
}

let lNumber =  returnNum(1,2);
console.log(lNumber);

// Assigment 4

function checkPalindrome(string) {
    // convert string to an array
    let arrayValues = string.split('');
    // reverse the array values
    let reverseArrayValues = arrayValues.reverse();
    // convert array to string
    let reverseString = reverseArrayValues.join('');

    if(string == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}

//take input
let string = prompt('Enter a string: ');

checkPalindrome(string);


//assigment - 5

// take input from the user
const lowerNumber = parseInt(prompt('Enter lower number: '));
const higherNumber = parseInt(prompt('Enter higher number: '));

console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

// looping from lowerNumber to higherNumber
for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}

//Assigment - 6


// take input from the user
const lowerNumber = parseInt(prompt('Enter lower number: '));
const higherNumber = parseInt(prompt('Enter higher number: '));

console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

// looping from lowerNumber to higherNumber
for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}

//Assigment - 7

// defining vowels
let vowels = ["a", "e", "i", "o", "u"]

function countVowel(str) {
    // initialize count
    let count = 0;

    // loop through string to test if each character is a vowel
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    // return number of vowels
    return count
}

// take input
const string = prompt('Enter a string: ');

const result = countVowel(string);

console.log(result);


// Assigment - 8

let num = 28;
let checkPerfectNumber = (num = 1) => {
   if(num === 1) {
      return false;
   };
   let sum = 1;
   for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
      if(num % i === 0) {
         sum = sum + i + num / i; if(sum > num) {
            return false;
         }
      };
   };
   return sum === num;
};

console.log(checkPerfectNumber(num));


// Assigment - 9

// take input from the user
const number = parseInt(prompt('Enter a positive number: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');
console.log(n1); // print 0
console.log(n2); // print 1

nextTerm = n1 + n2;

while (nextTerm <= number) {

    // print the next term
    console.log(nextTerm);

    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
}



//Assigmnt - 10

// take input from the user
const number = parseInt(prompt('Enter an integer: '));

//creating a multiplication table
for(let i = 1; i <= 10; i++) {

    // multiply i with number
    const result = i * number;

    // display the result
    console.log(`${number} * ${i} = ${result}`);
}
