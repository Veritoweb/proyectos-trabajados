const canvas= document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
const imagen = 'imagen';
const cardWidth = 350;
const cardHeight = 400;
const cardPadding = 10; 
let imagesCanvas = {};


function getX(params){
    let distance = params.xTo - params.xFrom;
    let steps = params.frames;
    let progress = params.frame;
    return distance / steps * progress;
}
function getY(params){
    let distance = params.yTo - params.yFrom;
    let steps = params.frames;
    let progress = params.frame;
    return distance / steps * progress;
}
function addImage(params){
    let name= params.name;
    if(imagesCanvas[name]===undefined){
        imagesCanvas[name]= document.createElement('canvas');
    };

imagesCanvas[name].width = cardWidth;
imagesCanvas[name].height = cardHeight;

let image = document.getElementById(name);
let imageCtx = imagesCanvas[name].getContext('2d');
imageCtx.clearRect(0,0,cardWidth,cardHeight);
imageCtx.drawImage(image,0,0,cardWidth,cardHeight);
ctx.drawImage(imagesCanvas[name], getX(params), getY(params));


if(params.frame< params.frames){
    params.frame = params.frame +1;
    window.requestAnimationFrame(drawCanvas);
    window.requestAnimationFrame(addImage.bind(null,params))
}
}

function drawCanvas(){
    ctx.fillStyle = 'rgb(255,255,255)';
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

function mover(){
    drawCanvas();
    addImage({
        name:imagen,
        frame:0,
        frames:100,
        xFrom:cardPadding,
        xTo:canvasWidth - cardWidth - - cardPadding,
        yFrom:cardPadding,
        yTo: canvasHeight - cardHeight - cardPadding 
    });
}

window.onload =mover;

function portfolio(){
    document.getElementById('capa').style.display='flex';  
    document.getElementById('video').play();
}
function cerrar(){
    document.getElementById('capa').style.display='none';
}
function pausar(){
    document.getElementById('video').pause();
}
function reproducir(){
    document.getElementById('video').play(); 
}
function uno(){
    document.getElementById('video').src='../imagenes/video1.mp4';
}
function dos(){
    document.getElementById('video').src='../imagenes/video2.mp4';
}

