//Indices:       0       1        2
const array = [ 'Luiz', 'Maria', 'João'];

console.log(array[0]); //luiz
console.log(array[1]); //maria
console.log(array[2]); //joão

array[0] = 'Gabriel';
console.log(array); //Gabriel, Maria, João

array.push('Isadora'); // adiciona no fim
console.log(array); // Gabriel. Maria, João, Isadora

array.unshift('Marcos'); //adiciona no começo
console.log(array); // Marcos, Gabriel, Maria, João, Isadora

array.pop(); //remove o último
console.log(array); // Marcos, Gabriel, Maria, João

array.shift(); //remove o primeiro
console.log(array); // Gabriel, Maria, João

console.log(array.slice(0, 2)); //Gabriel, Maria

console.log(array.length); //tamanho do array

