let nombre = document.getElementById("nombre").value;
console.log(nombre);

let formulario = document.getElementById ("formulario");
let entregaDatos = "submit";

function imprimir (evento) {
    evento.preventDefault();

    //Valido longitud de nombre:
    let nombre = document.getElementById("nombre").value;
    if (nombre.length < 5) { 
        console.log ("Nombre muy corto");
    }
    else{
        console.log ("Nombre: " + nombre);
    };
    
    let correo = document.getElementById("correo").value;
    if (correo.includes ("@") == false)  {
        console.log ("No es un correo válido");
    }
    else {
        console.log ("Correo: " + correo);
    };
    

    let asunto = document.getElementById("asunto").value;
    console.log ("Asunto: " + asunto);

    let comentario = document.getElementById("comentario").value;
    console.log ("Comentario: " + comentario);
}

formulario.addEventListener(entregaDatos, imprimir);