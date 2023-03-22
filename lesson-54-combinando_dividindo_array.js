const primeiro = [{ id: 1 }]
const segundo = [4, 5, 6]
primeiro[0].id = 10

// combinar
// const combinado = primeiro.concat(segundo)
const combinado = [...primeiro, ...segundo]
console.log(combinado)

// dividir
const cortado = combinado.slice()
console.log(cortado)

//clonar array -> spread
