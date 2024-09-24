// promises are used for parallel execution of code
let promise = new Promise((resolve, reject) => {
    console.log('promise')
    resolve(56)
})
console.log("one")
setTimeout(function () {
    console.log('two')
},5000)
console.log("three")
console.log(promise)
// promise
// one
// three
// Promise { 56 }
// two