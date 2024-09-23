// console.log(console)

console.error("het you are not right")

console.assert(45>57)//Assertion failed

// console.clear()

obj={a1:45,a2:57,a3:98}
console.table(obj)

console.warn("Are you foolish")

console.info("don't behave like a mad.")

console.time("ForLoop")
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.timeEnd("ForLoop")

console.time("WhileLoop")
let i=0
while(i<5){
    console.log(i)
    i++
}
console.timeEnd("WhileLoop")