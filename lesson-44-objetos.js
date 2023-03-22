let postagem = {
  titulo: 'Photo Dump',
  mensagem: 'Hi',
  visualizacoes: 500,
  comentarios: [{ autor: 'Eu' }, { mensagem: 'Olá' }],
  aoVivo: true
}

console.log(postagem)

function postagem2(titulo2, mensagem2, visualizacoes2, comentarios2, aoVivo2) {
  ;(this.titulo2 = titulo2),
    (this.mensagem2 = mensagem2),
    (this.visualizacoes2 = visualizacoes2),
    (this.comentarios2 = []),
    (this.aoVivo2 = aoVivo2)
}
