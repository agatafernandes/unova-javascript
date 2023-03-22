let faixas = [
  { tooltip: 'até 700', minimo: 0, maximo: 700 },
  { tooltip: '700 a 1000', minimo: 700, maximo: 1000 },
  { tooltip: '1000 a 5000', minimo: 1000, maximo: 5000 }
]
console.log(faixas)

function criaFaixaPreco(tooltip, minimo, maximo) {
  return {
    tooltip,
    minimo,
    maximo
  }
}

let faixa2 = [
  criaFaixaPreco('a', 0, 1000),
  criaFaixaPreco('a', 1000, 2000),
  criaFaixaPreco('a', 2000, 3000)
]
console.log(faixa2)
