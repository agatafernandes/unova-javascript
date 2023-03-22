// Escreva uma funç\ao que use dois números e retorne o maior entre eles
function maximo(maior) {
  let n1 = 19
  let n2 = 20

  if (n1 > n2) {
    console.log('Maior: ', n1)
  } else if (n2 > n1) {
    console.log('Maior: ', n2)
  } else {
    console.log('Os valores são iguais')
  }
}

console.log(maximo())
