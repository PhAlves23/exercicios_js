const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const templateString = `Olá ${nome}!`
console.log(concatenacao, templateString)

//expressoes...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(up(`Ei... ${up('cuidado')}!`))
