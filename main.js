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
