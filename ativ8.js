const prompt = require ('prompt-sync')()

const cString = prompt ('Entre com o custo: ');
const c = Number(cString);

const custo = (c * 27/100);

console.log(`O custo foi de: ${custo}`);
