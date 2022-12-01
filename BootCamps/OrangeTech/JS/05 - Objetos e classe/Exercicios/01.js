/*
    1- Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por quilómetros rodado.
    Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê valor
    gasto em reais para realizar este percurso.
*/

class Carros {
    marca;
    cor;
    gastoMedio;
    precoCombustivel;
    kmRodado;
    consumoLitro;

    constructor(marca, cor, gastoMedio, precoCombustivel, kmRodado, consumoLitro){ 
    this.marca = marca;
    this.cor = cor;
    this.gastoMedio = gastoMedio;
    this.precoCombustivel = precoCombustivel;
    this.kmRodado = kmRodado;
    this.consumoLitro = kmRodado / gastoMedio;}
}

function calcularGasto(){
        return consumoLitro * precoCombustivel
}

const gol = new Carros ('Gol', 'Preto', 10, 4.97, 200);


console.log(gol)