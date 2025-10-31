// forEach method



const nums : number []= [10,20,30,40];

nums.forEach((n:number, index: number) => {
console.log(`Index ${index}: value ${n}`);
});



// sum nums

let sum : number = 0;

nums.forEach((num: number) => {
sum = sum + num;
//sum += num;
});

console.log('sum of nums', sum);



// active users
interface User {
name: string;
id: number;
isActive: boolean;
}

const users: User [] = [
{id:1, name: 'Anna', isActive: true},
{id:2, name: 'Petar', isActive: false},
{id:3, name: 'Hristo', isActive: true},
{id:5, name: 'Mladen', isActive: false},
]


let activeIds: number [] =[];

users.forEach((user) =>{
if (user.isActive) {
activeIds.push(user.id) }
})

console.log('activeIds', activeIds);

