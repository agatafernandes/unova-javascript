const array = [70, 70, 80]

console.log(mediaAluno(array))

function media() {
  let soma = 0

  for (let valor of array) {
    soma += valor
  }
  return soma / array.length
}

function mediaAluno(notas) {
  const media = media(notas)

  if (media > 59) return 'F'
  if (media > 69) return 'D'
  if (media > 79) return 'C'
  if (media > 89) return 'B'
  if (media > 100) return 'A'
}
