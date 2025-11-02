// +++ TASK 1 +++

//Declare array with pronouns

let arrayProN: string[] = ["I", "You", "He", "She"];
console.log(arrayProN);

// push() method to add element in the end

arrayProN.push("It");
console.log("Task1 - ", arrayProN);


// +++ TASK 2 +++

//Declare array with postcodes

let postCodes: string[] = ["1000", "1440", "2730", "1600", "3634"];
console.log(postCodes);

// shift() method to remove first element in the array

postCodes.shift();
console.log("Task2 - ", postCodes);


// +++ TASK 3 +++


// Declare array of numbers

let arrayNums: number[] = [1, 2, 3, 4, 5];

// Declare new array 

let arrayNumsDivided: number[] = arrayNums.map((num: number) => num / 2);
console.log("Task3 - ", arrayNumsDivided);


// +++ TASK 4 +++

// Declare array of numbers

let arrayNumT4: number[] = [3, 7, 1, 9, 12, 4];

// Declare new array by filtering

let arrayNumsFilterd: number[] = arrayNumT4.filter((num: number) => num > 5);
console.log("Task4 - ", arrayNumsFilterd);

// +++ TASK 5 +++

// Declare array of numbers

let arrayNumT5: number[] = [9, 3, 7, 2, 8, 5];

// Declare new array by sorting

let arrayNumSorted: number[] = arrayNumT5.sort((a: number, b: number) => a - b);
console.log("Task5 - ", arrayNumSorted);


// +++ TASK 6 +++

// Declare array of numbers

let arrayFruits: string[] = ["apple", "banana", "cherry", "lemon", "peach"];

// Declare new array by extracting first 3 elements

let arrayFruitsExtracted: string[] = arrayFruits.slice(0, 3);
console.log("Task6 - ", arrayFruitsExtracted);

// +++ TASK 7 +++

// Declare array of mobiles

let arrayMobiles: string[] = ["car", "bike", "bus", "train", "boat"];

// remove elements from array by splice() method
let arrayMobilesRemoved: string[] = arrayMobiles.splice(1, 2);
console.log("Task7 - ", arrayMobiles);

// +++ TASK 8 +++


// Function findLargest() to compare three numbers
function findLargest(numOne: number, numTwo: number, numThree: number) {
    if (numOne >= numTwo && numOne >= numThree) {
        return `Max number is ${numOne}`;
    } else if (numTwo >= numOne && numTwo >= numThree) {
        return `Max number is ${numTwo}`;
    } else {
        return `Max number is ${numThree}`;
    }

}
console.log(findLargest(50, 43, 11));
console.log(findLargest(1, 100, 5));
console.log(findLargest(88, 6, 1001));
console.log(findLargest(50, 50, 11));
console.log(findLargest(1, 22, 22));
console.log(findLargest(72, 50, 72));


// +++ TASK 9 +++

// function convertToCm converts inch to cm

function convertToCm(numInch: number) {
    let numCm: number = Number((numInch * 2.54).toFixed(2));
    return `${numInch} inches is ${numCm} cm.`
}

console.log(convertToCm(2.54));
console.log(convertToCm(20));
console.log(convertToCm(1));


// +++ TASK 10 +++

// function calculateArea calculates area

function calculateArea(width: number, height?: number) {
    if (height) {
        let area: number = width * height;
        return `This is a rectangle. Area is ${area}`;

    } else {
        let area: number = width * width;
        return `This is a square. Area is ${area}`;
    }
}

console.log(calculateArea(5, 7));
console.log(calculateArea(8));