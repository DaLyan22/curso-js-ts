function meuEscopo() {
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');


  function recebeEventoForm(evento) {
    evento.preventDefault();
    console.log(pessoa);
   resultado.innerHTML = `<p>Nome:${nome.value} <br> Sobrenome:${sobrenome.value}  <br> Peso: ${peso.value} <br> Altura: ${altura.value}`;
  }
  form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();

