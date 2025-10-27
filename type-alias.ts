// type alias declaration
type Employee = string;
type EmployeeId = number;
type EmployeePosition = string;

type Result = string | number | null;

let data: Result = 'test';

let responseData: Result = 20;

let printSum: Result = 50;



// type alias with string literals

type PaymentMethod = "cash" | "card" | "crypto";

function paymentDetails(amount: number, method: PaymentMethod) {
    console.log(`Payment ${amount} by ${method}`);
}

paymentDetails(20, "cash");

// type alias in interface
type ID = string | number;
type Status = "Open" | "In progress" | "Done";

interface Ticker {
    //id : string | number;
    id: ID;
    title: string;
    //status: string;
    status: Status;
}

interface Email {
    id: ID;
    message: string;
}


const email = {
    id: 10,
    message: "Hello! I am Peter",

}




const ticket = {
    id: 1,
    title: 'Send email',
    status: "Done",
}

