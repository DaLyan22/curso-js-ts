const paragrafos = document.querySelector('div');
const ps = document.querySelectorAll('p');



const estilosBody = getComputedStyle(document.body)
const backgroundBody = estilosBody.backgroundColor
console.log(backgroundBody)

for (let i of ps){
    i.style.backgroundColor = backgroundBody;
    i.style.color = 'white';
}

for (let j of ps){
    console.log(j)
}