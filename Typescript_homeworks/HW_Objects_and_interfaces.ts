// Task 1 - Declare an interface named Person

interface Person {
    name: string;
    lastName: string;
    age: number;
    email: string;
    phoneNumber: number | string;
};


// Task 2 -  Declare an interface named PersonInfo which extends Person{}

interface PersonInfo extends Person {
    country?: string;
    greeting?: () => string;
};



// Task 3 - Create an object of type Person

const johnDoe: Person = {
    name: "John",
    lastName: "Doe",
    age: 37,
    email: "jdoe@gmail.com",
    phoneNumber: 359877654321,
};


// declare a function for introducing an object ot type Person
function introduction(person: Person): string {
    return `Hello, my name is ${person.name} ${person.lastName}. I am ${person.age} years old. 
My contacts are as follows - email ${person.email} and phone number ${person.phoneNumber}.`
};

console.log("TASK3 -", introduction(johnDoe));



// Task 4 - Create an object of type PersonInfo

// declare a person of type PersonInfo
const mariaAntonova: PersonInfo = {
    name: "Maria",
    lastName: "Antonova",
    age: 22,
    email: "mariaanton@gmail.com",
    phoneNumber: "0219991999",
};

// declare a person of type PersonInfo
const yankoGrozdanov: PersonInfo = {
    name: "Yanko",
    lastName: "Grozdanov",
    age: 46,
    email: "yanko1@abv.bg",
    phoneNumber: "0700 181716",
    country: "Bulgaria",
    greeting: function (): string {
        return `Welcome to ${this.country}! `
    },
};

// declare a function for introducing an object ot type PersonInfo, 
// reuses function introduction(Person) -> Person{} extends PersonInfo{}
function personInfoIntroduction(person: PersonInfo) {
    if (person.country) {
        return (person.greeting?.() + introduction(person));

    } else {
        return (introduction(person));
    }

}

// invokes an object with added optional property 'country'
console.log("TASK4_1 -", personInfoIntroduction(yankoGrozdanov));

// invokes an object withOUT added optional property 'country'
console.log("TASK4_2 -", personInfoIntroduction(mariaAntonova));

// invokes an object of type Person
console.log("TASK4_3 -", personInfoIntroduction(johnDoe));