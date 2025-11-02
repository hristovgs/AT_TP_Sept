// Class declaration

class Person {
    // name: string;
    // age: number;

    constructor(public name: string, public age: number) {
        this.name = name;
        this.age = age;
    }

    introduction(): void {
        console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
    }
}

// const  person1 = new Person ("Petko Todorov", 23);
// person1.introduction();
// person1.age;
// console.log("person name", person1.name);

// person1.name = "Ivan Ivanov";
// console.log("person name", person1.name);

// Readonly access modifier

class ReadonlyPersonData {
    readonly name: string;
    readonly age: number;

    constructor(name: string, age: number) {
        this.age = age;
        this.name = name;
    }
    intro() {
        console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
    }
}

const person2 = new ReadonlyPersonData("Kolyo Stanev", 54);
//person2.intro();
console.log(person2.age);
console.log(person2.name);

//person2.name ="Petya"; //Cannot assign to 'name' because it is a read-only property.ts(2540)



// Private access modifier
class PrivatePersonData {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.age = age;
        this.name = name;
    }
    private secretMessage(): string {
        return `This is a message from private method`;
    }


    intro(): void {
        console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);

        console.log(this.secretMessage());
    }
}
const person3 = new PrivatePersonData("Pavel", 12);

//person3.name; // Property 'name' is private and only accessible within class 'PrivatePersonData'.ts(2341)
// person3.age; // Property 'name' is private and only accessible within class 'PrivatePersonData'.ts(2341)
person3.intro();
// console.log(person3.secretMessage()); // Property 'secretMessage' is private and only accessible within class 'PrivatePersonData'.ts(2341)

// Class inheritance
class User {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    intro() {
        console.log("Nice to meet you");
    }
}



class UserDetails extends User {
    constructor(name: string) {
        super(name);
    }

    showDetails (){
        console.log(`My name is ${this.name}`);
    }
}

const user = new UserDetails("Niki");
console.log(user.name);
user.showDetails();
user.intro();


// Protected access modifier

class ProtectedPerson {
protected name : string;
protected age : number;

constructor(name: string, age: number){
    this.age = age;
    this.name = name;
}

protected getProtectedData ():string {
    return `Protected name ${this.name} and protected age ${this.age}`
}


}

const protectedPerson = new ProtectedPerson('Protected Pesho', 22);
//protectedPerson.name ////Property 'name' is protected and only accessible within class 'ProtectedPerson' and its 
//protectedPerson.getProtectedData()    ////roperty 'getProtectedData' is protected and only accessible within class 'ProtectedPerson' and its subclasses.ts(2445)

class Student extends ProtectedPerson{
private grade : number;

constructor (name: string, age: number, grade : number){
    super(name,age);
    this.grade = grade;
}

studentIntro(){
    console.log(this.getProtectedData());
    console.log(`${this.name} is ${this.age} `)
}
}


const student = new Student("Itso", 23, 5.5);
//student.grade; //// Property 'grade' is private and only accessible within class 'Student'.ts(2341)


student.studentIntro();