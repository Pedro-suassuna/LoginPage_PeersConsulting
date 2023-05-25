let inputEmail = document.querySelector("#email")
let inputPasword = document.querySelector("#password")
let line1 = document.querySelector(".line.email")
let line2 = document.querySelector(".line.password")

inputEmail.addEventListener("focus", change1)
inputEmail.addEventListener("blur", changeBack1)

inputPasword.addEventListener("focus", change2)
inputPasword.addEventListener("blur", changeBack2)

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

let eyeBlocked = document.querySelector(".closed")
let eyeOpen = document.querySelector(".opened")

eyeBlocked.addEventListener("click", openEye)
eyeOpen.addEventListener("click", closeEye)

function openEye() {
  eyeBlocked.classList.add("hide")
  eyeOpen.classList.remove("hide")
  inputPasword.setAttribute("type", "text")
}

function closeEye() {
  eyeBlocked.classList.remove("hide")
  eyeOpen.classList.add("hide")
  inputPasword.setAttribute("type", "password")
}
