import * as modulos from './module.js';

$(document).ready ((e) => {
    let tasks = modulos.getTasksEnStorage();

    $('#btn-todo').click(function (e) {
        modulos.buttonActive(e.target);
        if (tasks.length == 0) {
            return;
        }
        tasks = modulos.getTasksEnStorage();
        modulos.tasksLoad(tasks);
    });

    $('#btn-completed').click(function (e) {
        modulos.buttonActive(e.target);
        modulos.tasksLoad(tasks.filter(modulos.completedFilter));
    });

    $('#btn-incompleted').click(function (e) {
        modulos.buttonActive(e.target);
        modulos.tasksLoad(tasks.filter(modulos.incompletedFilter));
    });

    $('article.task-list-content').on('click', 'h4.task-title', e => {
        let descripcion = $(e.target).parent().children(".task-description");
        let fecha = $(e.target).parent().children(".task-date")
        if ((descripcion.get(0) && descripcion.get(0).style.maxHeight.length === 0) || (descripcion.get(0) && descripcion.get(0).style.maxHeight === "0px")) {
            descripcion.css("opacity", "1");
            descripcion.css("max-height", "300px");
            descripcion.css("transition-property", "all");
            descripcion.css("transition-duration", "250ms");
        } else {
            descripcion.css("opacity", "0");
            descripcion.css("max-height", "0px");
            descripcion.css("transition-property", "all");
            descripcion.css("transition-duration", "200ms");
        }
    });
    
    $('article.task-list-content').on('click', 'a.task-button', e => {
        console.log(e.target.getAttribute("data-tarea-id"));
        let id = e.target.getAttribute("data-tarea-id");
        id = +id;
        let tasks = modulos.getTasksEnStorage().map(task => {
            if (task.id === id) {
                task.estado = !task.estado;
                return task
            }
            return task
        });

        modulos.updateTasksEnStorage(tasks);
    });

    $('#btn-incompleted').trigger("click");

});