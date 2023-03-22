//velocidade max de 70
//a cada 5 km acima dolimite vc ganha 1 ponto
//math.flor
//caso pontos maior que 12 -> "carteira suspendida"
verificarVelocidade(200)

function verificarVelocidade(velocidade) {
  const velocidadeMax = 70
  const kmPorPonto = 5

  if (velocidade <= velocidadeMax) {
    console.log('Você esta dentro do limite esperado :)')
  } else {
    const pontos = Math.floor((velocidade - velocidadeMax) / kmPorPonto)
    if (pontos >= 12) {
      console.log('Carteira Suspensa')
    } else {
      console.log('Pontos: ', pontos)
    }
  }
}
