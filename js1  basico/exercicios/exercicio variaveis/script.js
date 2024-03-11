let varA = 'A'; //B
let varB = 'B'; // C
let varC = 'C'; // A

let varX = varA;
varA = varB 
varB = varC
varC = varX 

console.log(varA, varB, varC)