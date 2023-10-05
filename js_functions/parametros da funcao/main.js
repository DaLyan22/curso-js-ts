//funções com function tem a variavel arguments
function teste(){
    let zero = 0;
    for( let valor of arguments){
zero += valor;
    }
console.log(zero)
console.log('##############')
console.log(arguments)
}

teste(1, 2, 3)
console.log('##############')
function rest(valor1, valor2, ...valor3){
    console.log(valor1, valor2, valor3)
}

rest('casa', 'carro', 1, 2, 3, 4, 5)
console.log('##############')

const restArrow = (...args) => {
    console.log(`Esses são os argumentos: ${args}`)
}

restArrow(1, 2, 9, 29, 12)