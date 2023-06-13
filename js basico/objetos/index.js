const pessoa1 = {
    nome: 'Gabriel',
    sobrenome: 'Soares',
    idade: 16
}

console.log(pessoa1.nome); //Gabriel
console.log(pessoa1.sobrenome); //Soares
console.log(pessoa1.idade); //16

//-----------------------------------------

function createPerson(nome, sobrenome, idade){
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    } //functions like that can be used to "create objects"
}

const pessoa2 = createPerson('Gabriel', 'Soares', 16);
const pessoa3 = createPerson('Júlia', 'Mendes', 17);
const pessoa4 = createPerson('Arthur', 'Souza', 16);
const pessoa5 = createPerson('Murilo', 'Garcia', 8);

console.log(pessoa2.nome, pessoa3.nome, pessoa4.nome, pessoa5.nome,);

//-------------------------------------------

const pessoa69 = {
    nome: 'Gabriel',
    sobrenome: 'Soares',
    idade: 16,

    speak(){
        console.log("Hello world");
    }
};

pessoa69.speak();