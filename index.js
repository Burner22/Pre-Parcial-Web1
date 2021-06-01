function todos(){
    if(test()){
        agregar();
        var intro = document.getElementById("fnombre");
        var introa = document.getElementById("mensaje");
        intro.className = 'correcto';
        introa.className = 'correcto';
    } 
}

function test(){
    var validado = true;
    const nombre = document.getElementById("fnombre").value;
    const mensaje = document.getElementById("mensaje").value;
    var errores = [];
    var aux = -1;

    if(!nombre.match(/^[A-Z a-z\s]+$/) || nombre.length<3){
        aux++;
        errores[aux] = "Nombre Incorrecto!";  
        var intro = document.getElementById("fnombre");
        intro.className = 'erroneo';       
    }
    if(mensaje.length > 200 || mensaje.length == 0){
        aux++;
        errores[aux] = " Maximo 200 caracteres!";
        var intro = document.getElementById("mensaje");
        intro.className = 'erroneo'; 

    }

    if (aux>=0){
        alert(errores);
        validado = false;
    }
    else if (aux == -1){
        confirm("Desea enviar su formulario?")
    }
    return validado;
}

function agregar(){
    let aux = document.getElementById("fnombre").value;
    let aux2 = document.getElementById("mensaje").value;
    let comentario = document.getElementById("comentario");

    let khe = comentario.cloneNode();
    khe.innerHTML = aux + ": " + aux2;
    comentario.parentNode.appendChild(khe);   
    
}

