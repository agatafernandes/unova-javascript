// and (&&), or(), not()

//ex and
let maiorIdade = true
let carteiraTrabalho = true
let podeAplicar = maiorIdade && carteiraTrabalho
console.log(podeAplicar)

//ex or||
let maior = true
let menor = false
let condicao = maior || menor
console.log(condicao)

//ex not -> !
let harry = false
let styles = false
let aceito = harry || styles

let recusado = !aceito
console.log('recusado:', recusado)
