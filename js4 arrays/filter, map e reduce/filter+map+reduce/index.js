//da p fazer uma união dos 3 recursos

//separe os números pares
//dobre eles
//some tudo
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const pares = numeros.filter((x) => x % 2 == 0);
console.log(pares);
const dobro = pares.map((x) => x * 2);
console.log(dobro);
const soma = dobro.reduce(function (acumulador, valor) {
    acumulador += valor;
    return acumulador;
}, 0)

console.log(soma)