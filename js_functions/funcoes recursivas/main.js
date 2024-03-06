//Funções recursivas são funções que elas mesma se chamam de volta

function recursiva(max){
    if (max >=100) return;
    max++;
    console.log(max);
    recursiva(max);

}

recursiva(0)
