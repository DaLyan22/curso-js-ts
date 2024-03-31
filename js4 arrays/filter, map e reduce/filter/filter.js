//filter = > retorna um array com a mesma quantidade de elementos ou menos

//retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];



const numerosMaiorQue10 = numeros.filter((valor) => valor > 10 ); //return implicito, arrow function
console.log(numerosMaiorQue10)

console.log('###########');


//retorne as pessoas que tem o nome com mais de 5 letras
//retorne as pessoas com mais de 50 anos
//retorne as pessoas cujo nome termina com A
const pessoas = [
    { nome: 'Gabriel', idade: 17 },
    { nome: 'Amanda', idade: 17 },
    { nome: 'Daniela', idade: 47 },
    { nome: 'Regina', idade: 70 },
    { nome: 'Gildo', idade: 71 },
];

const nomeMaiorQue5Letras = pessoas.filter((valor) =>valor.nome.length > 5);
console.log(nomeMaiorQue5Letras);

console.log('###########');

const maiorDe50 = pessoas.filter((valor) => valor.idade > 50);
console.log(maiorDe50);

console.log('###########');

const terminaComA = pessoas.filter((valor) => valor.nome.endsWith('a'));
console.log(terminaComA);

