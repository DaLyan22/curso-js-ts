// valor por referencia
//                 0          1        2
// const nomes = [' Eduardo', 'Maria', 'Joana'];

// shift é igual pop só q na frente

const nomes1 = new Array('Eduardo', 'Maria', 'Joana');
const nomes2 = nomes1;
const nomes3 = new Array('Eduardo', 'Maria', 'Joana');
const nomes4 = [...nomes3];


nomes2.pop(); //pop elimina o ultimo elemento do array e isso reflete em nomes 1 e 2
nomes4.pop() //nao afeta nomes 4 pq usei o rest operator [...]

const removidoDoNomes4 = nomes4.pop();

console.log(nomes1);
console.log(nomes2);
console.log(nomes3);
console.log(nomes4);
console.log(removidoDoNomes4);

//
console.log('#############');

const nomes5 = new Array('Eduardo', 'Maria', 'Joana');
nomes5.push('João');
delete nomes5[1];
console.log(nomes5) //[ 'Eduardo', <1 empty item>, 'Joana', 'João' ]

console.log('#############');
//                     0         1          2        3           4
const array1 = [ 'Eduardo', 'Gabriel', 'Arthur', 'Nicolas', 'Rolim'];
const array2 = array1.slice(1, 4);
const array3 = array1.slice(0, -1);

console.log(array1);
console.log(array2);
console.log(array3);

const name = 'Gabriel Gomes Soares';
const names = name.split(' ');
console.log(names)

const nameAgain = names.join(' ');
console.log(nameAgain);