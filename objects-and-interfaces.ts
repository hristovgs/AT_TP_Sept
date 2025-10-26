// Interface declaration
interface Car {
    type: string;
    model: string;
    color: string;
    horsePower: number;
}

// Object declaration
const car: Car = {
    type: "Fiat",
    model: "500",
    color: "white",
    horsePower: 100,
};

console.log(car);

// Interface person object

interface Person {
    name: string;
    lastName: string;
    adress: string;
    age: number;
    hobbies: string[];
    //greeting: () => string;
    greeting(): string;
}

// Object with method and array
const person: Person = {
    name: "Ivan",
    lastName: "Ivanov",
    adress: "boul. Vitosha 30",
    age: 30,
    hobbies: ["football", "basketball", "hiking"],
    greeting: function () {
        return "Hello, my name is Ivan!";
    },
}

console.log(person);

// properties access
person.name;
person.age;
person["adress"];
console.log(person.greeting());

// properties redeclaration
person.age = 35;

console.log(person);

// let vs const redeclaration
let dog = { name: "Sharo" };
dog.name = "Lasi";
dog = { name: "Reksi" };

const cat = { name: "Lusi" };
cat.name = "Zhana";
//cat = {name: "Tom"}

// explicit object type 
const mouse: { name: string, favFood: string, age: number } = {
    name: "Jerry",
    favFood: "Cheese",
    age: 5,

}

// Interfaces - optional parameters, readonly and string literals
interface User  {
name: string;
readonly email: string;
//string literal
role: "user" | "admin"| "superadmin";
job?: string;
password?: string | number;
}


const user : User = {
    name: "Tom",
    email: "tom@gmail.com",
    role: "admin",
    job:"QA"
};

user.password = 5546122;
console.log(user);

// const secondUser : User = {
//     name: "Tom",
//     email: "tom@gmail.com",
// role: "guest",
//     job:"QA"
// };

interface UserPermissions extends User {
    permissions: string;
}

const thirdUser : UserPermissions = {
name: "erik",
email: "tom@gmail.com",
role: "admin",
job:"QA",
permissions: "denied",
}