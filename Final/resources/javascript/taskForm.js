<<<<<<< HEAD
import * as modulos from './module.js';

$(document).ready((e) => {
    let tarea = {
        titulo: 'Titulo',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        estado: false,
        fecha: new Date('2019-04-25')
    };
   
    let tasks = modulos.getTasksEnStorage();
    
    $('#btn-guardar').click(function (e) {
        let titulo = $("#titulo");
        let descripcion = $("#descripcion");
        
        if (!titulo.val()) {
            titulo.addClass('is-invalid')
            return;
        } else {
            titulo.removeClass('is-invalid'); 
            titulo.addClass('is-valid')
        }

        if (!descripcion.val()) {
            descripcion.addClass('is-invalid')
            return;
        } else {
            descripcion.removeClass('is-invalid'); 
            descripcion.addClass('is-valid')
        }

        const d = new Date()
        const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
        const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
        const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)
        let fecha = (da) + '-' + (mo) + '-' + (ye);


       let task = {
            id: tasks.length + 1,
            titulo: titulo.val(),
            descripcion: descripcion.val(),
            estado: false,
            fecha: fecha
        };
        

        modulos.setTasksEnStorage(task);
        titulo.val("");
        descripcion.val("");
        fecha;
        titulo.removeClass('is-valid');
        descripcion.removeClass('is-valid');
    });
});
=======
import * as modulos from './module.js';

$(document).ready((e) => {
    let tarea = {
        titulo: 'Titulo',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
        estado: false,
        fecha: new Date('2019-04-25')
    };
   
    let tasks = modulos.getTasksEnStorage();
    
    $('#btn-guardar').click(function (e) {
        let titulo = $("#titulo");
        let descripcion = $("#descripcion");
        
        if (!titulo.val()) {
            titulo.addClass('is-invalid')
            return;
        } else {
            titulo.removeClass('is-invalid'); 
            titulo.addClass('is-valid')
        }

        if (!descripcion.val()) {
            descripcion.addClass('is-invalid')
            return;
        } else {
            descripcion.removeClass('is-invalid'); 
            descripcion.addClass('is-valid')
        }

       let task = {
            id: tasks.length + 1,
            titulo: titulo.val(),
            descripcion: descripcion.val(),
            estado: false,
            fecha: new Date.now()
        };

        modulos.setTasksEnStorage(task);
        titulo.val("");
        descripcion.val("");
        fecha.val("");
        titulo.removeClass('is-valid');
        descripcion.removeClass('is-valid');
    });
});
>>>>>>> fd09b669777f1a82e631e5f8ad7448c50217691b
