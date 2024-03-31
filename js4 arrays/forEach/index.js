// forma de iterar sobre arrays 
//só disponível em arrays

const a1 = [1, 2, 3, 4 , 5, 6, 7, 8, 9];

a1.forEach(valor => console.log(valor));

//diferença do for each e of

for (el of a1){
    console.log(el)
}