const prompt = require('prompt-sync')(); //npm install prompt-sync
let a = prompt("type your age?  :"); //in string 

a = Number.parseInt(a); //changing from string to int
console.log(a) //code excuted
console.log(typeof a);//int