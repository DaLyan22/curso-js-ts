const form = document.querySelector('#formulario');


form.addEventListener('submit', function (e){
    e.preventDefault();
    console.log("deu certo");

    const altura = document.querySelector('.altura');
    const peso = document.querySelector('.peso');
    const resultado = document.querySelector('.resultado');

    const valor = Math.round(peso.value / altura.value ** 2)
    const level = getNivelImc(valor);


    function getNivelImc (valor) {
        const nivel = ['abaixo do peso', 'com peso normal', 'com sobrepeso',
          'com obesidade grau 1', 'com obesidade grau 2', 'com obesidade grau 3'];
      
        if (valor >= 39.9) return nivel[5];
        if (valor >= 34.9) return nivel[4];
        if (valor >= 29.9) return nivel[3];
        if (valor >= 24.9) return nivel[2];
        if (valor >= 18.5) return nivel[1];
        if (valor< 18.5) return nivel[0];
      }

getNivelImc()
    resultado.innerHTML = `Seu IMC é ${valor} e você está ${level}`
      
});





