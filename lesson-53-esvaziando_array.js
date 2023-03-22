//esvaziando um array
let numeros = [1, 2, 3, 4, 5]
let outros = numeros

numeros = []
console.log(outros)

numeros.length = 0

numeros.splice(0, numeros.length)
