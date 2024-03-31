//reduce -> reduz o array p un único valor

//some todos os números
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const somaDosNumeros = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador += valor;
    return acumulador;

}, 0)

// const numerosPares = numeros.filter(valor => valor % 2 == 0)
const numerosPares = numeros.reduce(function(acumulador, valor){
    if(valor % 2 == 0) acumulador.push(valor);
    return acumulador;
}, []); //NÃO FAÇA ISSO, USE FILTER!!!

console.log(somaDosNumeros);
console.log(numerosPares);

//retorne a pessoa mais velha 
console.log('##########');

const pessoas = [
    { nome: 'Gabriel', idade: 18 },
    { nome: 'Amanda', idade: 17 },
    { nome: 'Daniela', idade: 47 },
    { nome: 'Regina', idade: 70 },
    { nome: 'Gildo', idade: 71 }
]

const maisVelho = pessoas.reduce(function(acumulador, valor){
    if (acumulador.idade > valor.idade) {
        return acumulador;
        
    }
    return valor;
})

console.log(maisVelho)