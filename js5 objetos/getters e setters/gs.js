// defineproperty -> getter e setters

function Produto(nome, preco, estoque) {

    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        configurable: true, //pode apagar a chave ou reconfirgurar ela
        get: function(){
            return estoquePrivado;
        },
        set: function(valor) {
          if (typeof valor !== 'number'){
            throw new TypeError('Incorrect value');
          }
          estoquePrivado = valor;
        }

    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque =  7; //'O valor que eu quero';
console.log(p1);
console.log(p1.estoque);
