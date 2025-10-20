// let vs conts
let num: number = 10;
num = 5;
num = 15;

const welcomeMssg: string = 'Welcome!';
// cannot assing to welcomeMssg because it is a constant
// welcomeMssg = 'Welcome, Peter!'

// string
let message: string = 'Hello, Peter!'

let messageLength: number = message.length;
console.log(messageLength);

// string interpolation
let welcomeMessgeDetails: string = `Text message length is ${messageLength}`;
console.log(welcomeMessgeDetails);

// number and number operations

let numOne: number = 10;
let numTwo: number = 5;

let add: number = numOne + numTwo;
let substract: number = numOne - numTwo;
let multiply: number = numOne * numTwo;
let devide: number = numOne / numTwo;


// boolean (true / false)

let areEqual: boolean = numOne === numTwo;
let isGreater: boolean = numOne > numOne;
let isGreaterOrEqual: boolean = numOne >= numTwo;

// logical operators
let areEqualTo: boolean = numOne === 10 && numTwo === 5;   // logical AND
let isAnyNumberEqualTo: boolean = numOne === 10 || numTwo === 5;   // logical OR



// ternary operator
let isPositiviNum: string = numOne > 0 ? 'The number is positive' : 'The number is negative';

let isPositiviNumComparison: string = numOne > 0
    ? `The number ${numOne} is positive`
    : `The number ${numOne} is negative`;

// if/else statement

const numThree: number = 100;

if (numThree <= 10) {
    console.log('The number is less or equal to 10')
}
else if (numThree > 110) {
    console.log('The number is greater than 110')
}
else if (numThree > 50) {
    console.log('The number is greater than 50')
}
else {
    console.log('The number is not greater than 3')
}
