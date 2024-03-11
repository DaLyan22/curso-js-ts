try{
    console.log(naoDefinido)
}catch(error){
    console.log("A variável não está definida")
    console.log(error)
}
//------------------------------------------------------------

console.log("######################")
function soma(x, y) {
    if (
      typeof x !== 'number' || 
      typeof y !== 'number'
    ) {
      throw new Error('x e y precisam ser números.'); //esse new error é para aparecer o erro do js
    }
  
    return x + y;
  }
  
  try {
    console.log(soma(1, 2));
    console.log(soma('1', 2)); //erro
  } catch(error) {
    console.log(error);
  }finally{
    console.log("Eu sou sempre executado")
  }
  