let i = 0

while (i <=10){
    console.log(i);
    i++;
}
console.log('##########');
//-------------------------------------------------

function random(minimo, maximo){
    const r = Math.random() * (maximo - minimo) + minimo;
return Math.floor(r);

}
let rand = 10;
console.log(rand)

while (rand !== 10){
    rand = random(1, 50)
    console.log(rand) 
}

console.log('##########');

do {
    rand = random(1, 50)
    console.log(rand) 
}while (rand !==10 );