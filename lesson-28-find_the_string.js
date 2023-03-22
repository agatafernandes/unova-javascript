// criar um metodo para ler propriedades de um objeto
// exibir somente as propriedades do tipo string que estão nesse objeto

//typeof entrada !== 'number') return 'Não é um número'

const filme = {
  titulo: 'Avengers',
  ano: 2020,
  personagem: 'Homem de Ferro'
}

exibirPropriedades(filme)

function exibirPropriedades(obj) {
  for (prop in obj)
    if (typeof obj[prop] === 'string') {
      console.log(prop, obj[prop])
    }
}
