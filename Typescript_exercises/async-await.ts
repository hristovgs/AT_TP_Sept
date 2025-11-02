// basic async operations


 

console.log('Start');


setTimeout(() => {
console.log('Async operation');
} ,1000);

console.log('End');





// multiple async operations

function setTimeouts () {
setTimeout (() => {
console.log('3 seconds delay')
}, 3000)

setTimeout (() => {
console.log('1 second delay')
}, 1000)

setTimeout (() => {
console.log('2 seconds delay')
}, 2000)

}

setTimeouts();




// async await syntax
function delay (ms:number) {
return new Promise((resolve)=> setTimeout(resolve, ms));
}

async function demo (){
await delay(2000);
console.log('2 seconds delay');

await delay(3000);
console.log('3 seconds delay');

await delay(1000);
console.log('1 second delay');
}

demo();


// get product data

interface Rating {
rate: number;
count: number;
}



interface Product {
id: number;
title: string;
price: number;
description: string;
category: string;
image:string;
rating: Rating;
}


async function getData(){
 const response = await fetch("https://fakestoreapi.com/products/1");
 const data: Product = await response.json();
 console.log(`Title: ${data.title}`);
 console.log(`Price: ${data.price}`);
 console.log(`Category: ${data.category}`);
 }

 
 
// async function getData(): Promise<Product>{
// const response = await fetch("https://fakestoreapi.com/products/1");
// const data: Product = await response.json();
// return data;
// }

 
 
getData();
 



// try catch finally
try { 
const jsonData = JSON.parse('{"valid": true}');
} catch (err) {
console.error(err);
} finally {
 console.log("JSON parser ready");
 }
 