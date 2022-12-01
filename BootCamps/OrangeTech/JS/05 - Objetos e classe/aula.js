/*const pessoa = {
    nome: 'Thiago',
    idade: 35,
    
    descrever: function () {
         console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

pessoa.descrever();*/

/*class Pessoa {
    nome;
    idade;
    anoDeNascimento;
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
        this.anoDeNascimento = 2022 - idade;
    }

    descrever () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} o ano que você nasceu é
        ${this.anoDeNascimento}`);
   }
}

const thiago = new Pessoa('Thiago', 35);

const ayra = new Pessoa('Ayra', 2);



console.log(thiago)
console.log(ayra)*/

class Pessoa {
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade =  idade;
    }
}

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const thiago = new Pessoa('Thiago', 35);
const ayra = new Pessoa('Ayra', 2);

compararPessoas(thiago, ayra);