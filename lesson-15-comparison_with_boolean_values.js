//falsy -> vazio
//truthy -> avalia smp a primeira consição e ignora as outras. Se a primeira condição estiver vazia, avalia-se a outra

let corPersonalizada = 'Azul'
let corPadrao = 'Branco'
let corPerfil = corPersonalizada || corPadrao
console.log(corPerfil)
