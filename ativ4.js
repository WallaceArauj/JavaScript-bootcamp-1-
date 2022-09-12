const prompt = require ('prompt-sync')()

const valorAtxt = prompt('Entre com o valor de A: ');
const A = Number(valorAtxt);
const valorBtxt = prompt('Entre com o valor de B: ');
const B = Number (valorBtxt);
const valorCtxt = prompt ('Entre com o valor de C: ');
const C = Number(valorCtxt);

let r = Math.pow((A + B), 2);
let s = Math.pow((B + C), 2);
//let r = (A+B(Math.pow(2))) -->> errado
//let s = (B+C(Math.pow(2)))  --> errado

let resultado = ((r+s)/2)

console.log (`O resultado é: ${resultado}`)


