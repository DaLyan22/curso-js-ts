//exercicio antigo --------------------------------

let a = 'a'; //B
let b = 'b'; //C
let c = 'c'; //A

const array = [b, c , a];
[a, b, c] = array; 

console.log(a, b, c)

//--------------------------------------------------
// ... rest
const numeros = [10, 20, 30, 40, 50, 60, 70];
const [um, dois, tres, ...resto] = numeros;
console.log(um, dois, tres); 
console.log(resto);



const numeros2 = [[10, 20, 30], [40, 50, 60], [70, 80, 90]];
const [,[,,sessenta]] = numeros2;
console.log(sessenta);//60
console.log(numeros2 [1][2])//60