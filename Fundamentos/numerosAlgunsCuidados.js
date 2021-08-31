console.log(7 / 0) // Qualquer número dividido por 0, gera uma valor chamado "infinity"

//---------------------------------------------
console.log('10' / 2) // tomar cuidado ao utilizar números dentro de string porque se colocar algo errado pode gerar um NaN

//---------------------------------------------
console.log('3' + 2)
// Não soma apenas faz a concatenação

//-----------------------------------------------

console.log('Show!' * 2) // Gera um NaN

//---------------------------------------------
console.log(0.1 + 0.7) // Gera uma impresição por exemplo o valor certo é 0.8, mas o javascript gera 0.79999999999

//---------------------------------------------
//Você não consegue chamar o literal da função....
// console.log(10.toString())

//mas, você consegue chamar o literal dentro de parentêses
console.log((10.345).toFixed(2))
