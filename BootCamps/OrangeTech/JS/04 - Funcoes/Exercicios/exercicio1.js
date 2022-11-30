/*
    1) Faça um algoritimo que dado as 3 notas tiradas por um aluno em um semestre da
    faculdade calcule e imprima a sua média e a sua classificação conforme a tabela
    abaixo.

    Média = (nota 1 + nota 2 + nota 3) / 3;

    Classificação:

    - Média menor que 5, reprovado;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, Aprovado
*/

/*let nota1, nota2, nota3, media;
nota1 = 5;
nota2 = 5;
nota3 = 5;
media = (nota1 + nota2 + nota3) / 3;

console.log('Sua média é ', media.toFixed(1));

if (media < 5) {
    console.log('Você está reprovado');
} else if (media >= 5 && media <= 7){
    console.log("Você está de recuperação");
}else {
    console.log("Você está Aprovado");
} */

function calcularMedia (nota1, nota2, nota3){
    return (nota1 + nota2 + nota3) / 3
};

function classificarAluno(media) {
    if (media < 5) {
        return('Você está reprovado');
    } else if (media >= 5 && media <= 7){
        return("Você está de recuperação");
    }else {
        return("Você está Aprovado");
    }
}

function main() {

let nota1, nota2, nota3;
nota1 = 2
nota2 = 7
nota3 = 5
media = calcularMedia (nota1, nota2, nota3)

console.log(media.toFixed(1));
console.log(classificarAluno(media))
}

main();