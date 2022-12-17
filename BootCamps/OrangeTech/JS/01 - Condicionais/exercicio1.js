/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível do carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const precoEtanol = 3.99;
const precoGasolina = 5.39;
const tipoCombustivel = 'etanol';
const gastoMedio = 10.00;
const kmRodado = 2200;

const consumoLitro = kmRodado / gastoMedio;

if (tipoCombustivel === 'etanol') {
    const valorGasto = consumoLitro * precoEtanol
    console.log(valorGasto.toFixed(2))
} else /*if (tipoCombustivel === 'Gasolina')*/ {
    const valorGasto = consumoLitro * precoGasolina
    console.log(valorGasto.toFixed(2))
}