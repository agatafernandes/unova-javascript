exibirAsteriscos(10)

function exibirAsteriscos(linhas) {
  let padrao = ' '

  for (linha = 1; linha <= linhas; linha++) {
    padrao += '*'
    console.log(padrao)
  }
}
