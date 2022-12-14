/* 
    2) O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde
    para dar uma indicação sobre a condição de peso de uma pessoa adulta.

    Formula do IMC
    IMC = peso / (altura * altura)

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição
    de cordo com a tabela abaixo.

    IMC em adultos Condição?
    - Abaixo de 18.5, Abaixo do peso;
    - Entre 18.6 e 25, Peso Normal;
    - Entre 25 e 30, Acima do peso;
    - Entre 30 e 40, Obeso;
    - Acima de 40, Obesidade grave;
*/

/*let peso, altura, imc;
peso = 100;
altura = 1.50;

imc = peso /  Math.pow(altura, 2);

console.log('Seu IMC é', imc.toFixed(2));

if (imc < 18.5) {
    console.log('Você esta abaixo do peso');
} else if (imc >= 18.5 && imc < 25) {
    console.log('Seu peso está normal');
} else if (imc >= 25 && imc < 30) {
    console.log('Você está acima do peso');
} else if (imc >= 30 && imc < 40) {
    console.log('Você está obeso');
} else {
    console.log('Você está com Obesidade Grave');
}; */

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2)
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return ('Você esta abaixo do peso');
    } else if (imc >= 18.5 && imc < 25) {
        return ('Seu peso está normal');
    } else if (imc >= 25 && imc < 30) {
        return ('Você está acima do peso');
    } else if (imc >= 30 && imc < 40) {
        return ('Você está obeso');
    } else {
        return ('Você está com Obesidade Grave');
    };
}

(function () {
    let peso, altura, imc;
    peso = 100;
    altura = 1.50;
    imc = calcularImc(peso, altura)

    console.log('Seu IMC é', imc.toFixed(2));
    console.log(classificarImc(imc))
})();

