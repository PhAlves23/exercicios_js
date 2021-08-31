//ATRIBUIÇÃO POR REFERÊNCIA

//Nesse exemplo o valor de "b" foi alterado e o de "a" alterou junto porque foi feita uma igualdade entre eles e os dois começaram a puxar a informação do mesmo local.

const a = { nome: 'Olá, tudo bem?' }
console.log(a)
const b = a
b.nome = 'Sim, está tudo bem!'
console.log(a) // percebe-se aqui que o valor de "a" alterou, assim que o de "b" foi alterado.
console.log(b)

//-----------------------------------------------
//Outro exemplo
const pedido1 = { sabor: 'O pedido foi de muzzarella' }
console.log(pedido1)
const pedido2 = pedido1
pedido2.sabor = 'O pedido foi alterado para 4 queijos.'
console.log(pedido1) // o pedido1 foi alterado, assim que o pedido2 foi alterado
console.log(pedido2)

//-----------------------------------------------
//Outro, nesse caso eu inverti a varíavel que foi alterada.

const porta = { esta: 'A porta está Aberta' }
console.log(porta)
const porta2 = porta
porta.esta = 'A porta está fechada'
console.log(porta2)
console.log(porta)

//-----------------------------------------------

// Em tipos primitivos você faz cópia por valor, então mesmo igualando as duas variaveis se você alterar o valor de uma delas a outra não sofre a ação.
//Diferente dos Objetos que foram mostrados logo acima eles são feitos por refêrencias, ou seja a var "a" e "b", ficam com a mesma refêrencia ou melhor o mesmo arquivo no espaço de memória.

let c = 2
let d = c
d++
console.log(c)
console.log(d)

const ligado = { esta: 'A luz está ligada' }
console.log(ligado)
const desligado = ligado
ligado.esta = 'A luz está desligada'
console.log(ligado)
console.log(desligado)
