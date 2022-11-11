/*Faça um programa para calcular o valor gasto de combustivel em uma viagem.

Você terá 3 variáveis. Sendo elas:

- 1 Preço do combustivel.
- 2 Valor medio de consumo.
- 3 Kilometragem a ser percorrida.

Imprima no console o valor gasto em combustivel para realizar a viagem. */

const precoCombustivel = 4.99;
const mediaConsumo = 10.00;
const kmPercorrido = 200.00;
const consumoTotal = kmPercorrido / mediaConsumo * precoCombustivel;

console.log(consumoTotal.toFixed(2));