function meuEscopo() {
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');


  function recebeEventoForm(evento) {
    evento.preventDefault();

    pessoa = [];

    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');

    pessoa.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value
    });
    console.log(pessoa);
   resultado.innerHTML = `<p>Nome:${nome.value} <br> Sobrenome:${sobrenome.value}  <br> Peso: ${peso.value} <br> Altura: ${altura.value}`;
  }
  form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();

