let arr=[13,34,56,78,54,34,27]

// for each not makes a new array
arr.forEach((element,index,arr)=>{
    console.log(index,element,arr[index])
})
/* 
0 13 13
1 34 34
2 56 56
3 78 78
4 54 54
5 34 34
6 27 27
*/

// map makes a new array
// no change in original arrary
// let a = arr.map((value,index,arr)=>{
let a = arr.map((value)=>{
    // console.log(value)
    return value+1;
})
console.log(a)
/* 
[
  14, 35, 57, 79,
  55, 35, 28
]
*/

// filter
// no change in original arrary
let arr2= arr.filter((a)=>{
    return a<50
})
console.log(arr2)//[ 13, 34, 34, 27 ]

// array reduce
let array= [3,4,5,2,1,3]
let newArr= array.reduce((h1,h2)=>{
    return h1+h2
})
console.log(newArr)//18//returns a value
// 3+4,5,2,1,3
// 7+5,2,1,3
// 12+2,1,3
// 14+1,3
// 15+3
// 18