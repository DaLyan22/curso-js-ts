function mostraHora() {
    let data = new Date();
  
    return data.toLocaleTimeString('pt-BR', {
      hour12: false
    });
  } //isso mostra a hora

const timer = setInterval(function(){
    console.log(mostraHora());
}, 1000); //isso mostra a hora a cada 1000ms ou 1 segundo

setTimeout(function() {
    clearInterval(timer);
}, 10000); // mostra a hora em um intervalo de 10000 ms ou 10 segundos

setTimeout(function() {
    console.log("Passaram 15 segundos")
}, 15000); 



  