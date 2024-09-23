let num=[345,56,675,763,65]
for (let i = 0; i < num.length; i++) {
    console.log(num[i])
}
/*
345
56
675
763
65
*/
num.forEach((element)=>{
    console.log(element*element)
})
/* 
119025
3136
455625
582169
4225
*/

//Array.from
let name="agniroybar"
let arr= Array.from(name)
console.log(arr)//['a', 'g', 'n', 'i', 'r', 'o', 'y', 'b', 'a', 'r']

//for of
for (const i of num) {
    console.log(i)
}

//for in
for (const key in arr) {
    console.log(arr[key])
}