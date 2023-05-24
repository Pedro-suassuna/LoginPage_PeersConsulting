let input1 = document.querySelector("#email")
let input2 = document.querySelector("#password")
let line1 = document.querySelector(".line.email")
let line2 = document.querySelector(".line.password")

input1.addEventListener("focus", change1)
input1.addEventListener("blur", changeBack1)

input2.addEventListener("focus", change2)
input2.addEventListener("blur", changeBack2)

function change1() {
  line1.classList.add("slide")
  line1.classList.remove("slideReverse")
}

function changeBack1() {
  line1.classList.remove("slide")
  line1.classList.add("slideReverse")
}

function change2() {
  line2.classList.add("slide")
  line2.classList.remove("slideReverse")
}

function changeBack2() {
  line2.classList.remove("slide")
  line2.classList.add("slideReverse")
}
