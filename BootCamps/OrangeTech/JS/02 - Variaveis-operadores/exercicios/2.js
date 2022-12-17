/* Um hotel tem 6 andares, com 16 quartos em cada andar. Para garantir a qualidade do serviço, o número de camareiras depende do número de quartos ocupados. Para cada 12 quartos é necessário uma camareira. Quantas camareiras são necessárias se o hotel estiver com a lotação máxima? */

const andares = 6;
const quartos = 16;
const camareiraPorQuarto = 12;
const camareiraTotal = andares * quartos / camareiraPorQuarto;

console.log(camareiraTotal);