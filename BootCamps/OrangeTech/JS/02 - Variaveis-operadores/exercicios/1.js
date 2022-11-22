/* Em uma biblioteca tem 150 livros de não ficção e 329 livros de ficção. Hoje 118 destes livros estão emprestados. Quantos restam na biblioteca? */

const naoFicao = 150;
const ficao = 329;
const emprestados = 118;

const totalLivros = naoFicao + ficao - emprestados;

console.log(totalLivros)