//return
//retorna um valor
//termina a função

function add(x, y){
    return x + y;
}

function criaIndividuo(nome, sobrenome){
    return {nome, sobrenome};
}

const p1 = criaIndividuo('Gabriel', 'Soares');
const p2 = {
    nome: 'Isadora',
    sobrenome: 'Soares'
};

console.log(p1);
console.log(p2);

// função multiplicador com return

function criaMultiplicacao (multiplicador){
    return function(n){
        return multiplicador * n
    }
}

const numero = criaMultiplicacao(9);
console.log(numero(4));