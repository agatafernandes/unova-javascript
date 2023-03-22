const pessoa = {
  nome: 'agatha',
  idade: 17
}

//key-value
//nome -> key
///agatha -> valor
for (let chave in pessoa) {
  console.log(chave, pessoa.nome)
}

const cores = ['Branco', 'Azul', 'Lilás']

for (let indice in cores) {
  console.log(indice, cores)
}
