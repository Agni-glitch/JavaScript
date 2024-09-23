//array methods 
let num = [1,2,3,34,4]

let b= num.toString()
console.log(b)//1,2,3,34,4

let c = num.join('-')
console.log(c,typeof c)//1-2-3-34-4 string

//pop (changes the same array) //returns the popped element 
let r= num.pop()
console.log(num,r)//[ 1, 2, 3, 34 ] 4

let r2= num.push(56)
console.log(num,r2)//[ 1, 2, 3, 34, 56 ] 5 //attaches at end

let r3= num.shift()
console.log(r3)//1
console.log(num)//[ 2, 3, 34, 56 ]

let r4= num.unshift(1)
console.log(num,r4)//[ 1, 2, 3, 34, 56 ] 5