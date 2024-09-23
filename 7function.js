function avg(a,b) {
        return (a+b)/2; 
}

// arrow function
const sum = (a, b) => {
    return (a + b) / 2;
}

let hello=()=>{
    console.log("agni")
}

let hi=()=>{
    return "hi";
}

const prompt = require('prompt-sync')();
console.log("enter two numbers :");
let x = prompt("first num: ");
let y = prompt("second num: ")
x = Number.parseInt(x);
y = Number.parseInt(y);

hello();

let v= hi();
console.log(v)

console.log("average of two num " + x + " and " + y + " is " + avg(x, y))
console.log("average of two num " + x + " and " + y + " is " + sum(x, y))