//funções executadas quando uma ação ocorre

//gerar número aleatório p exemplo de callback
function rand(min = 1000, max = 4000){
   const num = Math.random() * (max - min) + min;
   return Math.floor(num)
};

function f1 (cbk){  //cbk = callback
    setTimeout(function(){
        console.log('f1');
        if (cbk) cbk ();
    }, rand());
   
}

function f2 (cbk){
    setTimeout(function(){
        console.log('f2');
        if (cbk) cbk ();
    }, rand());
    
}

function f3 (cbk){
    setTimeout(function(){
        console.log('f3');
        if (cbk) cbk ();
    }, rand());
    
}

f1(f1callback);

function f1callback(){
    f2(f2callback) //não usa paranteses se não chama imediatamente
}

function f2callback(){
    f3(f3callback)
}

function f3callback(){
    console.log('deu certo')
}