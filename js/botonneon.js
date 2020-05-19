const letras =document.getElementById('letra');
const letras2 =document.getElementById('letra2');
const letras3 =document.getElementById('letra3');
const letras4 =document.getElementById('letra4');


const encender=document.getElementById('Encender');
const apagar= document.getElementById('apagar');

encender.addEventListener('click', on);
apagar.addEventListener('click', off);

function on (){
    letras.classList.add('enc');
    letras2.classList.add('enc');
    letras3.classList.add('enc');
    letras4.classList.add('enc');
}


function off(){
    letras.classList.remove('enc');
    letras2.classList.remove('enc');
    letras3.classList.remove('enc');
    letras4.classList.remove('enc');
}
