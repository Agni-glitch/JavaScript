//same as c program
//if, if..else, if..elseif..else, switchcase, ternary operator(?:)
//switch case:  no break at last statement (case or default)

// npm install prompt-sync 

const prompt = require('prompt-sync')();
let a = prompt("type your age?  :");
a = Number.parseInt(a);
if(a >= 18){
    console.log("you are eligible")
} 
else{
    console.log("you are not eligible")
}
console.log("you can", a > 18 ? "drive" : "not drive")