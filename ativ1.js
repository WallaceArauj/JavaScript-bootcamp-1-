const prompt = require('prompt-sync')()

const anosString = prompt('Quantos anos vc já viveu? ')
const anos = Number(anosString)

const mesesString = prompt('Quantos meses vc já viveu? ')
const meses = Number(mesesString)

const diasString = prompt('Quantos dias vc já viveu? ')
const dias = Number(diasString)

const diasVividos = ((anos * 365) + (meses * 30) + dias)
console.log(`Você já viveu ${diasVividos} dias`)
