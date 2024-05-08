const objA = {
    chaveA: 'A'
};

const objB = {
    chaveB: 'B'
};

const objC = {
    chaveC: 'C'
};

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);

console.log(objB.chaveA);
console.log(objC.chaveA);

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * percentual/100)
};

const produtoX = new Produto('Detergente', 100);

produtoX.desconto(100);
console.log(produtoX)

//obj literal
const produtoY = {
    nome: 'caneca',
    preco: 15
}
Object.setPrototypeOf(produtoY, Produto.prototype);

produtoY.desconto(50);
console.log(produtoY)

//create

const produtoZ = Object.create(Produto.prototype);
produtoZ.preco = 130;
produtoZ.desconto(12)
console.log(produtoZ)