let name1 = "\'Agni Roybar\'"
console.log(name1)
console.log(name1.length)//11

console.log(name1.toUpperCase())
console.log(name1.toLowerCase())

console.log(name1.slice(2,7))//gni R
console.log(name1.slice(5))// Roybar'

console.log(name1.replace("gni","len"))//must contain the replacable string //'Alen Roybar'

let name2 = "Agni 2 Roybar"
console.log(name1.concat(" is a friend of ",name2))//'Agni Roybar' is a friend of Agni 2 Roybar

let name3= "     Agni       "
console.log(name3.trim())//Agni

for (let i = 0; i < name1.length; i++) {
    console.log(name1[i]);
}
// name1[6]="t"  //this is not possible

name4="rahul"+"rony"+"agni"
console.log(name4)//rahulronyagni