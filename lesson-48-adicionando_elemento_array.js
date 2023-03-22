const numeros = [1, 2, 3]
//inserir no incio
numeros.unshift(0)
//inserir no meio
numeros.splice(1, 0, 'a')
//inserir no final
numeros.push(4)

console.log(numeros)
