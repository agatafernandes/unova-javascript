// se a hr estiver entre as 06:00 até 12:00 : Bom Dia!
// se a hr estiver entre as 12:00 até 18:00 : Bom Tarde!
// Caso contrário : Boa Noite!

let hora = 23

if (hora > 6 && hora < 12) {
  console.log('Bom Dia!')
} else if (hora > 12 && hora < 18) {
  console.log('Boa Tarde!')
} else {
  console.log('Boa Noite!')
}
