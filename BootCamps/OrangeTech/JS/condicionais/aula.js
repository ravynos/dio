/*const numeroPar = true;

if (numeroPar){
    console.log('Verdadeiro')

} else  {
    console.log('Falso');
}*/

const numero = 12;
const numeroDivisivelPor5 = (numero % 5) === 0;

if (numero === 0){
    console.log('O numero é inválido')
}
else if (numeroDivisivelPor5) {
    console.log('Sim')
} else {
    console.log('Não')
}