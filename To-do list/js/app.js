console.log('holis')

 const fecha= document.querySelector('.date');
 const lista= document.querySelector('.lista');
 const agregar= document.getElementById('agregar');
 const clear= document.querySelector('.clear')

 const CHECK = "fa-check-circle";
 const UNCHECK= "fa-circle"
 const lineThrough = 'lineThrough'

let List =[];
let id = 0;


/*-----------fecha--------------- */
let options = {weekday:'long', month:'long', day:'numeric'}
 let hoy = new Date();
 fecha.innerHTML = hoy.toLocaleDateString('es-Es',options)




function addToDo(toDo, id, done, trash){
    if(trash){return}
      
       const hecho = done ? CHECK : UNCHECK;
       const linea = done? lineThrough:"";
   
    const texto=` <li class="item">
                       <i class="far ${hecho} " job="complete" id='${id}'></i>
                       <p class="texto ${linea}">${toDo}</p>
                       <i class="far fa-trash-alt" job="delete" id='${id}'></i>
                  </li>`
    const position= "beforeend";
    lista.insertAdjacentHTML(position, texto);
   
   }
 
   


 document.addEventListener('keyup',e=>{
    if(e.key==='Enter'){
        const toDo= agregar.value;
        if(toDo){  
            addToDo(toDo, id, false,false);
            List.push(
                {
                    name:toDo,
                    id:id,
                    done: false,
                    trash: false
                }
            );
            agregar.value ='';  
            id++; 
        } 
       
          localStorage.setItem('toDo',JSON.stringify(List)) 
    }
});



/*-----Local Storage-------- */

 let data = localStorage.getItem('toDo');
 console.log(data);
 if(data){
     List = JSON.parse(data);
     loadToDo(List);
     id = List.length;
     console.log(List)
 }else{
     List = [];
     id = 0;
 }
 
function loadToDo(array){
    array.forEach(item=>{
      addToDo(item.name, item.id, item.done, item.trash)
    })
  
}


 lista.addEventListener('click',e=>{
    
 if(e.target.classList.contains('far')){
    const Job= e.target.attributes.job.value
    if(Job =='complete'){
        completeToDo(e)
    }else if(Job=='delete'){
        removeToDo(e)
    }
    localStorage.setItem('toDo',JSON.stringify(List))
 }
      
})



function completeToDo(e){
    
    e.target.classList.toggle(CHECK);
    e.target.classList.toggle(UNCHECK);

    e.target.parentNode.querySelector('.texto').classList.toggle(lineThrough)
    console.log(List[e.target.id].done)
    List[e.target.id].done = List[e.target.id].done ? false : true;
}

function removeToDo(e){
    e.target.parentNode.parentNode.removeChild(e.target.parentNode)
    List[e.target.id].trash= true;
    console.log(List[e.target.id].trash)
}

/*limpiar el local storage */

clear.addEventListener('click',e=>{
    localStorage.clear();
    location.reload();
})