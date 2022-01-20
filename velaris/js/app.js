
let inputs = document.querySelectorAll('input, textarea');
inputs.forEach(i=>{
i.addEventListener('focusout',validarEntrada);
})

const formulario= document.querySelector('form');
formulario.addEventListener('submit', validacionForm);

let states={
    nombre:false,
    email:false,
    mensaje:false
};

let expreRegMail= /^\w+@\w+\.(\w{2,4})\.(\w{2,4}){1,2}$/;
let expreRegMail1= /^\w+@\w+\.(\w{2,4}){1,2}$/;
let expreRegNyA= /^[a-zA-Z]{2,}\s[a-zA-Z]{2,}\s*$/
let expreRegNomb=/^[a-zA-Z]{3,}\s*$/;

function validarEntrada(e){
switch(e.target.id){
case "nombre":
   if(!expreRegNomb.test(e.target.value) && !expreRegNyA.test(e.target.value)){
       hayError(e);}
 else{
    datoValido(e);
    states.nombre= true;
   }
    
   
    break;
case "email":
   if(!expreRegMail.test(e.target.value)&& !expreRegMail1.test(e.target.value)){
       hayError(e);
   }else{
       datoValido(e);
       states.email=true;
   }
    break;
case "mensaje":
    if(e.target.value==''){
        hayError(e);
    }else{
    datoValido(e);
    states.mensaje =true;
}
 break;
}}


function validacionForm(e){
    if(states.nombre && states.email && states.mensaje){
       e.preventDefault();
        console.log('El formulario se ha completado correctamente!')
       
    }else{
        e.preventDefault(); 
        let evento= new Event('focusout',{bubbles:true})
        inputs.forEach(e=>e.dispatchEvent(evento))
        console.log('El formulario no se completo correctamente')
    }
}

function hayError(e){
    const grupo = e.target.closest('.input-grp');
    const input = grupo.querySelector('input, textarea');
    const error= grupo.querySelector('.input-error')
    error.classList.remove("hidden");
    input.classList.add('error');
    input.classList.remove('valido');
    console.log('campo invalido'); 
}
function datoValido(e){
    const grupo = e.target.closest('.input-grp');
    const input =grupo.querySelector('input, textarea');
    const error = grupo.querySelector('.input-error');
    error.classList.add('hidden');
    input.classList.add('valido');
    console.log('campo correcto!');
}