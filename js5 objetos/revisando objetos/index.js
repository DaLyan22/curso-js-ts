//objetos - revisão

const pessoas = {
    nome: 'Gabriel',
    sobrenome: 'Soares'
}
const chave = 'sobrenome';
console.log(pessoas.nome, pessoas['sobrenome']);


//------------------------------
const pessoa1 = new Object();
pessoa1.nome = 'Gabriel';
pessoa1.sobrenome = "Soares";

// delete pessoa1.nome

pessoa1.falarNome = function(){
  console.log( `Ele disse que o nome é ${this.nome}`)
}

console.log(pessoa1)
pessoa1.falarNome()

for (let chave in pessoa1){
    console.log(chave);
}

//-----------------------------
//factory functions // constructor functions // classes
function criaPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome,
        nomeCompleto(){
            return `${nome} ${sobrenome}`
        }
    }
}

const p1 = criaPessoa('Amanda', 'Damiano')
console.log(p1.nomeCompleto())

for (chaves in p1){
    console.log(chaves)
}


function Pessoa (nome, sobrenome){
    this.nome = nome,
    this.sobrenome =sobrenome
}

const p2 = new Pessoa('Gabriel', 'Soares');
const p3 = new Pessoa ('Mariana', 'Meira');
p3.sobrenome = 'Gama';
Object.freeze(p3);
p3.nome = 'Melissa';
console.log(p2, p3)

