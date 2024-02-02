//CONSTRUCTOR FUNCTIONS -> começa maiúscula

function Individuo(nome, idade){
//atributos privados:
    const cpf = 123;
    function manipulaCpfPrivadamente(){
        
    }

    this.nome = nome;
    this.idade = idade;

    this.metodo = function(){
        console.log(`${this.nome}: sou um método.`)
    }

}

const i1 = new Individuo('Gabriel', 16);
const i2 = new Individuo('Amanda', 17);

console.log(i1);
console.log('######');
console.log(i2);
console.log('######');
i1.metodo();