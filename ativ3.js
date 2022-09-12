const prompt = require('prompt-sync')()

const segundosString = prompt ('Digite os segundos trabalhados: ')
const segundos = Number(segundosString)

const hora = (segundos/3600)
const minuto = ((hora%3600)/60)
const segundo = ((hora%3600)%60)

console.log(`Horas trabalhadas são de: ${hora}`)
console.log(`Os minutos trabalhados são de: ${minuto}`)
console.log(`Segundos são de: ${segundo}`)
