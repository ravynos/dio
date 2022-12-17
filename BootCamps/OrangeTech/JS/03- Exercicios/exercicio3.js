/*
3) Elabore um algoritimo que calcule o que deve ser pago por um produto, considerando 
o preço normal de etiqueta e a escolha da condição de pagamento.

Utilize os códigos da tabela a seguir para ler qual condição de pagamento escolheda
e efetuar o cálculo adequado.

Código condição de pagamento:

- À vista Débito, recebe 10% de desconto;
- À vista no dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de atiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais jutos de 10%.
*/

let valorProduto, formaPagamento, parcelamento;
valorProduto = 200;
formaPagamento = 'duasVezes';

if (formaPagamento === 'debito') {
    const calculoPorcentagem = 10 / 100 * valorProduto
    const valorAPagar = valorProduto - calculoPorcentagem
    console.log('Total a pagar =', valorAPagar)
} else if (formaPagamento === 'dinheiro' || formaPagamento === 'PIX') {
    const calculoPorcentagem = 15 / 100 * valorProduto
    const valorAPagar = valorProduto - calculoPorcentagem
    console.log('Total a pagar =', valorAPagar)
} else if (formaPagamento === 'duasVezes') {
    const parcelamento = (valorProduto / 2)
    console.log('Parcelameto em 2X')
    console.log('Valor a pagar =', parcelamento)
    console.log('Valor total da compra =', valorProduto)
} else if (formaPagamento === 'parcelado') {
    const calculoPorcentagem = 15 / 100 * valorProduto
    const valorAPagar = valorProduto + calculoPorcentagem
    console.log('Total a pagar =', valorAPagar)
}
