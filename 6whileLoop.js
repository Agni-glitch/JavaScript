/*
const prompt = require('prompt-sync')();
let a= prompt("enter a number ");
a= Number.parseInt(a)
let i=0;
while (i<=a) {
    console.log(i)
    i++;
}
*/
//do-while
const prompt = require('prompt-sync')();
let a= prompt("enter a number ");
a= Number.parseInt(a)
let i=0;
do {
    console.log(i)
    i++;
} while (i<=a);
//1 time permanent execution