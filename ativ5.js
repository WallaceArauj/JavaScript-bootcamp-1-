const prompt = require ('prompt-sync')()

const n1String = prompt ('Entre com  a primeira nota: ')
const n1 = Number(n1String)

const n2String = prompt ('Entre com a segunda nota: ')
const n2 = Number(n2String)

const n3String = prompt ('Entre com a terceira nota: ')
const n3 = Number(n3String)

const media = ((n1*2)+(n2*3)+(n3*5))/(2+3+5)

console.log(`A média final ${media}`)
