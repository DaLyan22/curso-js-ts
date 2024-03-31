//map = > retorna array com mesmo tamanho porém com valores alterados

//dobre os números 
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosDobrados = numeros.map((valor) => valor * 2)
console.log(numerosDobrados);


//retorne apenas o nome, remova a chave nome e adicione a chave id
const pessoas = [
    { nome: 'Gabriel', idade: 17 },
    { nome: 'Amanda', idade: 17 },
    { nome: 'Daniela', idade: 47 },
    { nome: 'Regina', idade: 70 },
    { nome: 'Gildo', idade: 71 },
];

const nomes = pessoas.map((valor) => valor.nome);
console.log(nomes)

const idades = pessoas.map((valor) => {
   const obj = {idade: valor.idade};
   return obj
})
console.log(idades);

const Id = pessoas.map((valor, indice) =>{
    valor.id = indice;
    return valor;
} )
console.log(Id);


