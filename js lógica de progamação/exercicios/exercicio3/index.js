// se x é divísivel por 3 retorne fizz, por 5 retorne buzz, por 5 e 3 retorne FizzBuzz
// se não for dívisivel por nenhum dos dois retorne x
// verifique se o inserido é um número 
// números de 0 a 100

function fizzBuzz (x){
    console.log(isNaN(x));

    if (x % 3 === 0 && x % 5 === 0){
        return "FizzBuzz";
    }else if (x % 3 === 0){
        return "Fizz";
    }else if(x % 5 === 0){
        return "Buzz";
    }else{
        return x;
    }

}

for(let i = 0; i <=100; i++){
    console.log(`Número:${i}`)
    const numero = fizzBuzz(i)
    console.log(numero);
    console.log("####")
}

// const numero = fizzBuzz(12)
// console.log(numero)