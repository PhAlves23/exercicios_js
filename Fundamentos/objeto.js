//Um objeto é uma coleção de chave e valor.

const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.9
prod1['Desconto legal'] = 0.4 // evitar atributos com espaço

console.log(prod1)

const prod2 = {
  nome: 'Camisa Polo',
  preco: 79.9
}
console.log(prod2)

//Treinando
const pessoa = {}
pessoa.nome = 'Paulo Henrique'
pessoa.idade = 18
pessoa.estado = 'São Paulo'
console.log(pessoa)

const pessoa2 = {
  nome: 'Ana Beatriz',
  idade: 3,
  estado: 'São Paulo'
}
console.log(pessoa2)

const pessoa3 = {
  nome: 'Ana Lúcia',
  idade: 34,
  estado: 'São Paulo'
}
console.log(pessoa3)

const pessoa4 = {}
pessoa4.nome = 'Ana Paula'
pessoa4.idade = 35
pessoa4.estado = 'São Paulo'
console.log(pessoa4)
