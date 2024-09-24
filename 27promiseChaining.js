let p1=new Promise((resolve, reject) => {
    setTimeout(() => {
       console.log("after 2 sec") 
       resolve(56)
    }, 2000);
})
p1.then((value)=>{
    console.log(value)
    let p2=  new Promise((resolve, reject) => {
        resolve("promise 2")
    })
    return p2
}).then((value)=>{
    console.log(value)
    console.log("2 .then() is done ")
    return 2
}).then((value)=>{
    console.log(value)
})
// after 2 sec
// 56
// promise 2
// 2 .then() is done 
// 2

// (solution to call back hell)
