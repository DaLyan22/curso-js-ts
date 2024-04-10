function Pessoa (nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => 'ORIGINAL ' + this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = () =>{
    return this.nome + ' ' + this.sobrenome;
}

const p1 = new Pessoa('Gabriel', 'Soares');
console.log(p1.nomeCompleto())

const data = new Date();

console.dir(p1);
console.dir(data);

