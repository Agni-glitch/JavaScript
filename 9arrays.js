// an array is a object with key of 0,1,2,3,4,....

let marks =["agni",56,false,null]
console.log(marks)//[ 'agni', 56, false, null ]
console.log(marks[0])//'agni'
console.log(marks[1])//56
console.log(marks[2])//false
console.log(marks[7])//undefined
console.log(marks.length)//4

marks[1]=67//unlike strings we can change the the value //mutable
marks[4]=24
console.log(marks)//console.log(marks)
console.log(typeof marks)//object

for (const key in marks) {
    console.log(key,marks[key])
}
/*
0 agni
1 67
2 false
3 null
4 24
*/
