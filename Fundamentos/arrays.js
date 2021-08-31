const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3]) // o array e constituido por indices
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

//----------------------------------------------------------------
valores.push({ id: 3 }, false, null, 'teste') // "push" adiciona diferentes tipos de valores no array
console.log(valores)

//----------------------------------------------------------------
console.log(valores.pop()) // "pop" retira o valor de um array

//----------------------------------------------------------------
delete valores[0] //Deleta o valor escolhido pelo indice do array
console.log(valores)

//----------------------------------------------------------------
console.log(typeof valores) //array é do tipo object
