const nombre = document.getElementById("name")
const email = document.getElementById("email")
const mensaje = document.getElementById("mensaje")
const parrafo = document.getElementById("parrafo")
const form = document.getElementById("form")

form.onsubmit = (e) => {
  e.preventDefault()
  let warnings = ""
  let entrar = false
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
  parrafo.innerHTML = ""
  
  if (nombre.value.length < 6) {
    warnings += `El nombre no es valido <br>`
    entrar = true
  }
  if (!regexEmail.test(email.value)) {
    warnings += `El email no es valido <br>`
    entrar = true
  }
  if (mensaje.value.length < 8) {
    warnings += `El mensaje es muy corto <br>`
    entrar = true
  }

  if (entrar) {
    parrafo.innerHTML = warnings
    parrafo.classList.remove("correcto")
    parrafo.classList.add("error")
  } else {
    parrafo.classList.remove("error")
    parrafo.classList.add("correcto")
    parrafo.textContent = "Enviado"
    setTimeout(() => {
      nombre.value = ""
      email.value = ""
      mensaje.value = ""
      parrafo.innerHTML = ""
    }, 1000);
  }
}
