//funções que retornam objetos

function criaUser(nome, sobrenome, a, p) {
    return{
        nome,
        sobrenome,

        fala(assunto){
            return `${this.nome} está falando sobre ${assunto}`
        },

        peso: p,
        altura: a,

        //getter
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        },
        //getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        //setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join();
            
        }
    };
}

const p1 = criaUser('Gabriel', 'Soares', 1.7, 58);
console.log(p1)

p1.nomeCompleto = 'Ednaldo Pereira'
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.fala(1)) //ednaldo pois usei o this

console.log(p1.imc)