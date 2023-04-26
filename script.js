const frutas = ["laranja", "limão", "uva"]

const fruta1 = document.querySelector('#fruta-1')
fruta1.innerHTML = frutas[0]
console.log(fruta1.innerHTML)

const fruta2 = document.getElementById('fruta-2')
fruta2.innerHTML = fruta[1]

const fruta3 = document.getElementById('fruta-3')
fruta3.innerHTML = frutas[2]

const fruta4 = document.getElementById('fruta-4')
let input = document.getElementById('texto')

const imprimeTexto = () => {
    console.log(texto.value)
}


const addInList = () => {
    fruta4.innerHTML = texto.value
}