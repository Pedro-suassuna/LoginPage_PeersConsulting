// LÓGICA DO EFEITA DA BARRA DESLIZANTES SOB OS ESCRITOS DO EMAIL E SENHA

const inputEmail = document.querySelector(".emailInput")
const inputPasword = document.querySelector(".passwordInput")
const line1 = document.querySelector(".line.email")
const line2 = document.querySelector(".line.password")

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

//LÓGICA DO OCULTAR/VISUALIZAR SENHA

const eyeBlocked = document.querySelector(".closed")
const eyeOpen = document.querySelector(".opened")

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

// LÓGICA DO DARK E LIGHT MODE

const sunButton = document.querySelector(".sun")
const moonButton = document.querySelector(".moon")

sunButton.addEventListener("click", changeMode)
moonButton.addEventListener("click", changeMode)

function changeMode() {
  document.body.classList.toggle("darkMode")
  sunButton.classList.toggle("hide")
  moonButton.classList.toggle("hide")
}

// // LÓGICA DA TELA MODAL DE AGRADECIMENTO

// ABRIR TELA
let formButton = document.querySelectorAll("button")
const screen2 = document.querySelector(".screen2")

formButton.forEach(button => button.addEventListener("click", showMessage))

function showMessage(e) {
  e.preventDefault()

  screen2.classList.add("open")

}

// FECHAR TELA

const closeIcon = document.querySelector(".closeModalIcon")

closeIcon.addEventListener("click", closeModal)

function closeModal() {
  screen2.classList.remove("open")
}

// SWITCH

const switchButton = document.querySelector(".switch__container label")
const clientForm = document.querySelector(".clientForm")
const peersForm = document.querySelector(".peersForm")

switchButton.addEventListener("click", switchMode)

function switchMode() {
  if (clientForm.classList.contains("hide")) {
    clientForm.classList.remove("hide")
    peersForm.classList.add("hide")
  } else {
    clientForm.classList.add("hide")
    peersForm.classList.remove("hide")
  }
}
