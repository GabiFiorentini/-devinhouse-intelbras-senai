var contador = 0;

function decrement(){
    contador = contador - 1
    document.querySelector(".display").innerHTML = contador
}

function increment(){
    contador = contador + 1
    document.querySelector(".display").innerHTML = contador
}