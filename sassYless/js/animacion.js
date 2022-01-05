let btn_girar= document.getElementById('btn_girar');
let btn_parar= document.getElementById('btn_parar');
let cubo= document.getElementById('cubo');

btn_girar.addEventListener('click',girar);
btn_parar.addEventListener('click',parar);

function girar(){
    cubo.style.animationPlayState= 'running';

}

function parar(){
   cubo.style.animationPlayState='paused';
}
