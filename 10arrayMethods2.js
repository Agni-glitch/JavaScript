let num= [1,2,3,4,5,6,7,8,9]
delete num[0]//deletes 0th element
console.log(num)//[ <1 empty item>, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(num.length)//9

let num2 =[10,11,12,13,14,15]
num[0]=1
let numMore = num.concat(num2)
console.log(numMore)//[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ]
//concat not changes the actual array

let num3=[45,87,23,65,8,45]
console.log(num3.sort())//[ 23, 45, 45, 65, 8, 87 ]//sorting alphabetically

let num4=[23,54,21,56,78,65,89,35,41]
let compare=(a,b)=>{
    return a-b;
}
let compare2=(a,b)=>{
    return b-a;
}
num4.sort(compare)
console.log(num4)//[ 21, 23, 35, 41, 54, 56, 65, 78, 89 ]

num4.sort(compare2)
console.log(num4)//[ 89, 78, 65, 56, 54, 41, 35, 23, 21 ]

num4.reverse()
console.log(num4)//[ 21, 23, 35, 41, 54, 56, 65, 78, 89 ] //reverse an array

