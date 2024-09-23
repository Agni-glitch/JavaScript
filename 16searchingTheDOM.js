// change the card title to red
// let ctitle = document.getElementsByClassName("card-title")[0]
// ctitle.style.color="red"
let ctitle = document.getElementById("firstCardTitle")
ctitle.style.color="violet"
let ctitles = document.querySelectorAll(".card-title")
ctitles[0].style.color="blue"
ctitles[1].style.color="green"
ctitles[2].style.color="orange"
console.log(ctitles)
// . for class
// # for Id
document.querySelector(".this").style.background="pink"

console.log(document.getElementsByTagName("a"))//all a tags
console.log(document.getElementsByTagName("a.btn.btn-primary.this"))
console.log(document.querySelector(".card").getElementsByTagName("a"))
console.log(document.getElementsByName("search"))