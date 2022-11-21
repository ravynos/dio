/*
3) Elabore um algoritimo que calcule o que deve ser pago por um produto, considerando o preço normal de
etiqueta e a escolha da condição de pagamento.

Utilize os códigos da tabela a seguir para ler qual condição de pagamento escolheda e efetuar o cálculo
adequado.

Código condição de pagamento:

- À vista Débito, recebe 10% de desconto;
- À vista no dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de atiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais jutos de 10%.
*/

let valorProduto, formaPagamento, porcentagem, calculoPorcentagem;
valorProduto = 200;
formaPagamento = 'debito';
//porcentagem = 20
//calculoPorcentagem = porcentagem / 100 * valorProduto

//console.log(calculoPorcentagem)

if (formaPagamento === 'debito'){
    const valorAPagar = 10 /100 * valorProduto
    console.log('Débito = ', valorAPagar)
} else if (formaPagamento === 'dinheiro' && formaPagamento === 'PIX')
    const valorAPagar = 10 /100 * valorProduto

