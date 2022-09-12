const prompt = require ('prompt-sync')()

const aString = prompt ('Digite o valor de A: ')
const A = Number(aString)

const bString = prompt ('Digite o valor de B: ')
const B = Number(bString)

const cString = prompt ('Digite o Valor de C: ')
const C = Number(cString)

const dString = prompt ('Digite o valor de D: ')
const D = Number(dString)

const eString = prompt ('Digite o valor de E: ')
const E = Number(eString)

const fString = prompt ('Digite o valor de F: ')
const F = Number(fString)

let x = ((C*E)-(B*F))/((A*E)-(B*D))
let y = ((A*F)-(C*D))/((A*E)-(B*D))

console.log (`O valor de X é: ${Math.floor(x)}`)
console.log (`O valor de Y é: ${Math.trunc(y)}`)
