// funções imediatas q nn tocam o escopo global

(function() {
    console.log("Essa é uma função imediata");
}) ();

console.log('################');

(function(idade, peso, altura) {

    const sobrenome = 'Miranda';
    function criaNome(nome) {
      return nome + ' ' + sobrenome;
    }
  
    function falaNome() {
      console.log(criaNome('Luiz'));
    }
  
    falaNome();
    console.log(idade, peso, altura);
  
  })(30, 80, 1.80);