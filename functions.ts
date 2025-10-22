// functions
function displayPersonalData(name: string, aga: number) {
    return `${name} is ${aga} years old.`;
}

console.log(displayPersonalData("Ivan Ivanov", 25));

const personalData: string = displayPersonalData("Petar Petrov", 33);
console.log(personalData);


function devideNums(numOne: number, numTwo: number) {
    return numOne / numTwo;
}

devideNums(10, 5);
devideNums(50, 5);


// arrow functions
const sumNums = (x: number, y: number) => x + y;
sumNums(3, 2);

// optional parameters

function greeting(name: string, age?: number) {
    if (age) {
        console.log(`${name} is ${age} years old`);
    } else {
        console.log(`Hi , i am ${name}`);
    }


}
greeting("Todor");
greeting("Misho", 15);

// Default parameters
function substractNums (numOne:number= 10, numTwo: number = 5) {
    console.log(numOne-numTwo);
}
substractNums(50);
substractNums(50,30);

