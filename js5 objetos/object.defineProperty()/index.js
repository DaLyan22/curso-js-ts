// defineProperty  & define Properties

function Produto(nome, preco, estoque) {

    this.nome = nome;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        value: estoque, // o valor pô kkkkkk
        writable: false, //pode ou nn alterar 
        configurable: false //pode apagar a chave ou reconfirgurar ela

    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, //mostra a chave
            value: nome, // o valor pô kkkkkk
            writable: false, //pode ou nn alterar 
            configurable: false //pode apagar a chave ou reconfirgurar ela

        },
        preco: {
            enumerable: true, //mostra a chave
            value: preco, // o valor pô kkkkkk
            writable: false, //pode ou nn alterar 
            configurable: false //pode apagar a chave ou reconfirgurar ela
        }
    });

}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 229; //nn altera nada pq writable é false

console.log(p1);
console.log(Object.keys(p1));

