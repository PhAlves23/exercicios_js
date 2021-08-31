const escola = 'Cod3r'

//Pegando um determinado caractere de uma string
console.log(escola.charAt(4))
console.log(escola.charAt(5))

//-----------------------------------------------
//Pegando o código do caractere da string
console.log(escola.charCodeAt(3))

//-----------------------------------------------
//A partir de um caractere pegamos o indice dele
console.log(escola.indexOf('3'))

//-----------------------------------------------
//Fizemos duas chamadas passando o indice inicial(1) e passando o inicial e o final (0, 3)
console.log(escola.substring(1))
console.log(escola.substring(0, 3))

//-----------------------------------------------
//String concatendo com uma variavel e concatenando com outra string, para concatenar pode utilizar ".concat" ou "+"
console.log('Escola '.concat(escola).concat('!'))
console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\d/, 'e')) //expressão regular

//Gerando Arrays
console.log('Ana, Maria, Pedro'.split(','))

//Gerando Arrays utilizando RegExp
console.log('Ana, Maria, Pedro'.split(/,/))

//Treinando

const nome = 'Paulo'
console.log(nome.charAt(4))
console.log(nome.charCodeAt(3))
console.log(nome.indexOf('u'))

console.log(nome.substring(1))
console.log(nome.substring(5))

console.log('O nome '.concat(nome).concat('!'))
console.log(nome.replace(2, 'a'))
