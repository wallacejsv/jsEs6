class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List {
    constructor() {
        super();
        this.usuario = 'JOnathan';
    }

    mostraUsuario() {
        console.log(this.usuario);
    }
}

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
    MinhaLista.add('novo topdoooo');
}

MinhaLista.mostraUsuario();

/** STATIC */

class Matematica {
    static soma(a, b) {
        return a + b;
    }
}
console.log(Matematica.soma(1, 2));

/** const, let */

/** array, vetores */
// map - serve para percorrer o vetor e retornar alguma coisa, retornar uma nova informação
const arr =[1, 3, 4, 5, 8, 10];
const newArr = arr.map(function(item, index) {
    return item + index;
});
console.log(newArr);

// reduce é uma forma de consumir todo o vetor e transformar em uma unica informação; Geralmente um numero
const sum = arr.reduce(function(total, next) {
    return total + next;
});
console.log(sum);

// filter - ex: pegar todos os numeros que são pares do array
const filter = arr.filter(function(item) {
    return item % 2 === 0;
});
console.log(filter);

// find - verificar se existe alguma informação dentro do array ou se consegue encontrar essa informação dentro do array

const find = arr.find(function(item) {
    return item === 4;
});
console.log(find);

/** Arrow functions */

const arr2 = [1, 3, 4, 5, 6];

const newArr2 = arr2.map((item) => {
    return item * 2;
});

console.log(newArr2);

//function
const teste = () => {
    return 'teste';
}
console.log(teste());

// valores padrão
const soma = (a = 3, b = 6) => {
    return a + b;
}
console.log(soma(1));
console.log(soma());

// desestruturação de objetos
const usuario = {
    nome: 'Jonathan',
    idade: 25,
    endereco: {
        cidade: 'SP',
        estado: 'SP',
    },
};

const { nome, idade, endereco: { cidade } } = usuario;
console.log(nome);
console.log(idade);
console.log(cidade);

const mostraNome2 = ({ nome, idade }) => {
    console.log(nome, idade);
}
mostraNome2(usuario);

// Operadores rest/spread ( ... )
// instalar novo pacote -> @babel/plugin-proposal-object-rest-spread

//REST -> pegar o resto das propriedades
const usuario2 = {
    nome2: 'Jonathan',
    idade: 25,
    empresa: 'Minha'
};
//coloca o nome2 em uma variavel e o resto do objeto na variavel "resto"
const { nome2, ...resto } = usuario2;
console.log(nome2);
console.log(resto);

//colocar o numero 1 do array na variavel a, o numero 2 na variavel b e o resto na variavel c
const arr3 = [1, 2, 3, 4];

const [ a, b, ...c ] = arr3;
console.log(a);
console.log(b);
console.log(c);

//REST operaiton com parametros de funções
function soma3(...params) {
    return params.reduce((total, next) => total + next);
}
console.log(soma3(1, 3, 4));

//resto
function soma4(a, b, ...params) {
    return params;
}
console.log(soma4(1, 3, 4));

//SPREAD - faz o papel de propagar. Repaçar as informações de um array pra outra estrutura de dados

//colocar array dentro de array
const ar1 = [1, 2, 3];
const ar2 = [4, 5, 6];
const ar3 = [...ar1, ...ar2];
console.log(ar3);

// mudar uma propriedade de um objeto
const usuario3 = {
    nome: 'Jon',
    idade: 25,
    empresa: 'Oi'
};

const usuario4 = { ...usuario3, nome: 'WALLACE' };
console.log(usuario4);

//template literals - variavel dentro de string
const t = 23;
const string = `aaaaa ${t}`;

//Object short syntax - sintax curta de objeto

const nome3 = 'AHHH!';
const idade3 = 25;

const usuario5 = {
    nome3,
    idade3,
    empresa: 'Oi'
};

console.log(usuario5);

//webpack
// yarn add webpack webpack-cli -D

// yarn add babel-loader -D
