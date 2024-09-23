/*
const prompt = require('prompt-sync')();
let sum =0
let a= prompt("enter a number ");
a= Number.parseInt(a)
for (let i=1; i <= a; i++) {
    sum +=i   
}
console.log("sum of " + a + " num is " +sum)
*/

//for-in loops
let obj={
    "agni":34,
    "agni1":45,
    "agni2":67,
    "agni3":67
}
for (let a in obj) {
console.log("marks of "+a+" in maths "+obj[a])
}


//for-of loop
//here shows obj is not itersble
//used for string and arrays 
for (const a of "Agni Roybar") { //string is not terminated by space, string is not an character array
    console.log(a)
}