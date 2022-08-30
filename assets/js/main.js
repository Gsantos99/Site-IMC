
const inputPeso = document.querySelector('#inputPeso')
const inputAltura = document.querySelector('#inputAltura')
const btnEnviar = document.querySelector('.btn-enviar')
const textoImc = document.querySelector('.textoImc')
const form = document.querySelector('.form')



btnEnviar.addEventListener('click', imc)



function imc() {
  const peso = Number(inputPeso.value)
  const altura = Number(inputAltura.value)
  const resultadoImc = peso / (altura * altura);

  form.addEventListener('submit', e => {
    e.preventDefault()
  })

  if (!peso && !altura) {
    textoImc.style.backgroundColor = 'red'
    textoImc.innerHTML = `Peso e altura inválidos!`
  } else if (!altura) {
    textoImc.innerHTML = `Altura inválida!`
  } else if (!peso) {
    textoImc.style.backgroundColor = 'red'
    textoImc.innerHTML = `Peso inválido!`
  } else if (resultadoImc >= 40) {
    textoImc.style.backgroundColor = 'red'
    textoImc.innerHTML = `${resultadoImc.toFixed(
      2
    )} Obesidade grau 3 ou mórbida`
  } else if (resultadoImc >= 35 && resultadoImc <= 39.9) {
    textoImc.style.backgroundColor = 'red'
    textoImc.innerHTML = `${resultadoImc.toFixed(2)} Obesidade grau 2`
  } else if (resultadoImc >= 30 && resultadoImc <= 34.9) {
    textoImc.style.backgroundColor = 'red'
    textoImc.innerHTML = `${resultadoImc.toFixed(2)} Obesidade grau 1`
  } else if (resultadoImc >= 25 && resultadoImc <= 29.9) {
    textoImc.style.backgroundColor = 'green'
    textoImc.innerHTML = `${resultadoImc.toFixed(2)} Sobrepeso`
  } else if (resultadoImc >= 18.5 && resultadoImc <= 24.9) {
    textoImc.style.backgroundColor = 'green'
    textoImc.innerHTML = `${resultadoImc.toFixed(2)} Peso normal`
  } else if (resultadoImc < 18.5) {
    textoImc.style.backgroundColor = 'red'
    textoImc.innerHTML = `${resultadoImc.toFixed(2)} Abaixo do peso`
  }


}


