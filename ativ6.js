const prompt = require('prompt-sync')()

const x1String = prompt ('Valor de x1: ');
const x1 = Number (x1String);

const x2String = prompt ('Valor de x2: ');
const x2 = Number (x2String);

const y1String = prompt ('Valor de y1: ');
const y1 = Number (y1String);

const y2String = prompt ('Valor de y2: ');
const y2 = Number (y2String);

let r = Math.pow ((x2 - x1), 2)
let r2 = Math.pow ((y1-y2),2)

let d = Math.sqrt ((r + r2), 2)

console.log(`O resultado é: ${d}`)

