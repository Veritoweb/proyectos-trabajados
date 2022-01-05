const inicio= document.getElementById('inicio');
const cerrar= document.querySelector('.btn-danger');
const form = document.getElementById('formulario');
console.log(inicio);

inicio.addEventListener('click', function(){
    
    form.classList.add('show');//no me funcionaba al principio por cuestiones de Jerarquias!! tuve que ponerle !important
    // form.style.display='block';// esta funcion pisa al id!!!
}) 
cerrar.addEventListener('click',function(){
     form.classList.remove('show');
    // form.style.display='none';
})