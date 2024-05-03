//os prototypes ficam dentro de tds objetos sem vc ter q colocar dentro da função la e pa dai é bom p gastar menos espaço

function Pessoa (nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => 'ORIGINAL ' + this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function(){ 
    return 'Esse é o nome: ' + this.nome + ' ' + this.sobrenome;
}

const p1 = new Pessoa('Gabriel', 'Soares');
const p2 = new Pessoa('Rosa', 'Parks');

console.log(p1.nomeCompleto())
console.log(p2.nomeCompleto())





