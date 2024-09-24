const regex=/very/g
const regex2=/(Agni){2}/gi
// i for case insensitive

const text ="Harry is a very very nice and very good boy"

// console.log(text.replace("very","VERY"))
// Harry is a VERY very nice and very good boy

console.log(text.replace(regex,"VERY"))
// Harry is a VERY VERY nice and VERY good boy

// https://regexr.com/

const text2="Agniagni is a surname"
console.log(text2.replace(regex2,"Roybar"))
// Roybar is a surname