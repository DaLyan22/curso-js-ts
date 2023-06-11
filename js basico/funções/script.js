function saudação(nome){
  console.log(`Olá tudo bem, ${nome}?`)
  return nome;
}

saudação('Gabriel'); //Olá tudo bem, Gabriel?
saudação('Marcos') // Olá tudo bem, Marcos?

const variavel = saudação('Gabriel');
console.log(variavel); // Gabriel
//------------------------------------------------------------------------------------------------------
function soma(x, y){
    const adicao = x + y;
    return adicao;
}

console.log(soma(3, 18)); //21
console.log(soma(123, 123421)); //123544