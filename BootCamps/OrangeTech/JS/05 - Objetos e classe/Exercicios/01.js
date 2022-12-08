/*
    1- Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por quilómetros rodado.
    Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê valor
    gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedio;

    constructor(marca, cor, gastoMedio, precoCombustivel, distancia){ 
    this.marca = marca;
    this.cor = cor;
    this.gastoMedio = 1 / gastoMedio;
    }

    calcularGasto(distancia, precoCombustivel){
        return distancia * this.gastoMedio * precoCombustivel;
}
}

const gol = new Carro('Wolks', 'Preta', 10);

console.log('Meu carro gasta R$', gol.calcularGasto(200, 4.97).toFixed(2), 
'reais para realizar essa viagem.');