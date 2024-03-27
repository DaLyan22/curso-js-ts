//                 0          1         2          3
const nomes = [ 'Batman', 'Nicolas', 'Eduardo', 'Julia'];

//nomes.splice(indice, delete, elemento1Add, elemento2Add);

const removidos = nomes.splice(2, 1, "Matheus", "Amanda");
nomes.splice(5, 0 , 'Helena');
console.log(nomes, removidos);