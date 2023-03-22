function art(filmeArt, serieArt) {
  ;(this.filmeArt = filmeArt),
    (this.serieArt = serieArt),
    (this.musica = function () {
      console.log('The Night We Meet')
    })
}
const exemplo = new art('10 Coisas Que eu Odeio em Você', 'Girl Meets World')

console.log(exemplo)
