const dia = new Date(2019, 3, 20, 10, 23, 12, 123);
console.log(dia);
//-------------------------------------------------------------------------------------------
function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
  }
  
  function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());
  
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
  }
  
  const data = new Date();
  const dataBrasil = formataData(data);
  console.log(dataBrasil);