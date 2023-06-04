const num1 = 18.023293940002
const num2 = 17

console.log(num1.toFixed(2)) // vai mostrar duas casas decimais arredondando
console.log(Number.isInteger(num1)) // retorna true ou false se é inteiro

const arredondar = 9.53213
const arredondar1 = Math.floor(arredondar) //9
const arredondar2 = Math.ceil(arredondar) //10
const arredondar3 = Math.round(arredondar) //10
console.log(`Arredondando obtemos ${arredondar1} e ${arredondar2} e ${arredondar3}`)

const random = Math.random() //retorna aleatorio entre 0 e 1
console.log(random)

const randomMax20 = Math.round(Math.random() * 21) //retorna aleatorio redondo até 20
console.log(randomMax20)

const randomBetween5And56 = Math.round(Math.random() * (56 - 5) + 5); //retorna aleatorio entre 5 e 56
console.log(randomBetween5And56)