//Quando você como programador for zerar uma varíavel ou melhor deixar ela sem valor é melhor você deixar ela em "null", o "undefined" deixa a própria linguagem mostrar quando entender que não tem valor.

let valor // não inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)
//.log(valor.toString()) // Erro!, cuidado quando tentar acessar uma variavel que está em null

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.5
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco) // utilizar "!!", transforma o item em boolean
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)
