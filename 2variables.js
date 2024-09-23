// dynamically typed language
// runtime variable

// let/var/const use to declear a avariable
let a= 67; //integer variable
console.log(a);
a = "Agni" //string variable 
console.log(a);
// rules to declear is came as c program
// must begin with letter, & or _ and are case scensitive

// let can be updated but can not be redecleared(gives error)


//var can be updated and also be redecleared and not used any more
var book = 24;
// block
{
var book = "The Tempest"
}
console.log(book);
// var value changes globally


//const can not redecleared or updated
// const must be initialized
const me = "agni"
// let me ="agni";
// gives error