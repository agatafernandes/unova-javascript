let endereco = {
  rua: 'Álvaro Áurelio Céu',
  cidade: 'Porto',
  Cep: '4141 - 4142'
}

function exibirEndereco() {
  for (let chave in endereco) {
    console.log(chave, endereco[chave])
  }
}

exibirEndereco(endereco)
