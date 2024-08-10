window.addEventListener('keydown',(e)=>{
if(e.key=='+'){
incremento()
}else if(e.key=='-'){
    decremento() 
}else if(e.key=='.'){
    resetear()
}

})


let contador = 0;

const carritos=document.querySelectorAll('.valor')
const produt=document.getElementById('totel')
const toCompra=document.getElementById('stock')

// formateamos para que tengan puntos

const producto=parseFloat(toCompra.textContent.replace(/\./g,""))




function incremento(){
        contador+=1
        
        actualizarCarrito()
}


function decremento(){

    if(contador>0){
        contador-=1
    }

    actualizarCarrito()
}

function resetear(){
    contador = 0;
    actualizarCarrito()
}



// creamos la funcion actualizar para que cada vez que realizaemos una funcion se pinte en el html

function actualizarCarrito(){
    carritos.forEach(carrito => {
        carrito.innerHTML = contador;
    });
    
    produt.innerHTML=(contador*producto).toLocaleString("es-CO") ;

}


document.getElementById("incremento").onclick = incremento;
document.getElementById("decremento").onclick = decremento;
document.getElementById("resetear").onclick = resetear;