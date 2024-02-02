//voltando a progamar
//Função construtora e fábrica retornam objetos
//construtora -> Pessoa (new)

function Pessoa (nome, sobrenome){
    const id = 18726; //id não disponivel fora da função

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log("Mr " + this.nome + " disse que isso é um método")
    }
}

const p1 = new Pessoa("Gabriel", "Soares");
console.log(p1)
p1.metodo()

