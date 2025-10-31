// arrays declaration
let numsArray: number[] = [1, 2, 3, 4];
let stringArray: string[] = ['Pesho', 'Gosho', 'Tosho', 'misho'];
let combinedArray: (string | number)[] = [1, 'Pesho', 'Gosho', 2];

// access element by index
stringArray[0]; // pesho
stringArray[1]; // Gosho
stringArray[2]; // Tosho

// access array length
numsArray.length;

// method map
let multiplyNums = numsArray.map((num: number) => num * 2);
let mapNames = stringArray.map((currName: string) => `Hello, ${currName}`);
let checkTypeOf = combinedArray.map((element: string | number) => {
    if (typeof element === "number") {
        return element + 5;
    } else {
        return `Welcome, ${element}`;
    }
});

// console.log(mapNames);
// console.log(checkTypeOf);

// method filter

let positiveNumbers: number[] = [2, 3, 4, 5, 6];
let filteredArray: number[] = positiveNumbers.filter((num: number) => num > 3 && num < 6);
//console.log("filteredArray", filteredArray);

// method sort

let sortNums: number[] = [100, 2, 30, 4, 44, 6];
console.log(sortNums.sort((a: number, b: number) => a - b));
let sortedResultDesc = sortNums.sort((a: number, b: number) => b - a);
console.log(sortedResultDesc);

// method push -- adds element at the end of the array

sortedResultDesc.push(200);
console.log(sortedResultDesc);

// method pop - removes the last element at the end of the array

sortedResultDesc.pop();
console.log(sortedResultDesc);

// method shift - removes the first element 

// method unshift - adds element at 0 index

// method slice - extracts elements by setting index

let arrayFruits: string[] = ["apple", "banana", "cherry", "lemon", "peach"];
let arrayFruitsExtracted: string[] = arrayFruits.slice(0, 3);
console.log(arrayFruitsExtracted);

