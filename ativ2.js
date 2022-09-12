const prompt = require('prompt-sync')();

const diasString = prompt ('Quantos dias você viveu? ');
const dias = Number(diasString);

const anos = parseInt (dias / 365);
const mes = parseInt ((dias%365) / 30);
const dia1 = (dias%365) % 30;

console.log(`\nAnos: ${anos}`);
console.log(`\nMês ${mes}`);
console.log(`\nDias ${dia1}`);