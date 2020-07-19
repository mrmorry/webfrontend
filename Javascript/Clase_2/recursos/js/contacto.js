let nombre = document.getElementById("nombre").value;
console.log(nombre);

let formulario = document.getElementById ("formulario");
let entregaDatos = "submit";

function imprimir (evento) {
    // evento.preventDefault();
    // console.log("Se disparó el evento enviar")

    let nombre = document.getElementById("nombre").value;
    console.log ("Nombre: " + nombre);

    let correo = document.getElementById("correo").value;
    console.log ("Correo: " + correo);

    let asunto = document.getElementById("asunto").value;
    console.log ("Asunto: " + asunto);

    let comentario = document.getElementById("comentario").value;
    console.log ("Comentario: " + comentario);
}

formulario.addEventListener(entregaDatos, imprimir);