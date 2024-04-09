const produto = {nome: 'Caneca', preco: 1.8};
const outraCoisa = Object.assign({}, produto, {material: 'porcelana'});

outraCoisa.nome = 'Outro nome';
outraCoisa.preco = 2.5;
console.log(outraCoisa);
console.log(produto);
//assim vc copia os valores do primeiro objeto sem apontar p o mesmo local

console.log('###############');

console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); // isso ai passa as propriedades de uma chave de um obj
console.log('###############');

console.log(Object.keys(produto)); //mostra só as chaves
console.log(Object.values(produto)); //mostra só os valores
console.log(Object.entries(produto)); // mostra as chaves e seus valores



