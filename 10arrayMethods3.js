// splice and slice 
let num=[345,56,675,763,65,8,23,53,75]
let num2=num.splice(2,3, 2345,6444,7893)
console.log(num)//[ 345,   56, 2345, 6444, 7893, 8, 23, 53, 7] //changes the elements 
console.log(num2)//[ 675, 763, 65 ] //returns the deleted array 

let num3=num.slice(3)//not changes the actual array
console.log(num3)//[ 6444, 7893, 8, 23, 53, 75 ]
num3=num.slice(2,5)
console.log(num3)//[ 2345, 6444, 7893 ]