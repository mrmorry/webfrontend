<<<<<<< HEAD
function getTasksEnStorage() {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    if (!tasks) {
        tasks = [];
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    return tasks;
}

function setTasksEnStorage(task) {
    let tasks = getTasksEnStorage();
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateTasksEnStorage(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function generateTagTask(tasks) {
    return `
            <div class="task card shadow-1 border-0 mb-4">
                <div class="card-body task-container">
                    <h4 class="task-title">${tasks.titulo}</h4>
                    <p class="task-description">${tasks.descripcion}</p>
                    <p class="task-date">${tasks.fecha}</p>
                    <a data-tarea-id="${tasks.id}" href="#" class="btn btn-link task-button ${tasks.estado ? 'completed' : 'text-warning'}">
                        <i data-tarea-id="${tasks.id}" class="fa ${tasks.estado ? 'fa-check-circle-o' : 'fa-clock-o'} fa-check-circle-o"></i>
                        <i id="trash" class="fa fa-trash-o' : 'fa-trash-o'} fa-trash-o"></i>
                    </a>
                </div>
            </div>
        `
};


function tasksLoad(tasks) {
    let htmlTareas = $(".task");
    htmlTareas.remove();
    let bgImagen = $("div.no-task");
    if (tasks.length == 0) {
        bgImagen.removeClass("no-show");
        return;
    } else {
        bgImagen.addClass("no-show");
        tasks.forEach(task => {
            let taskContainer = $('article.task-list-content');
            taskContainer.append(generateTagTask(task));
        })
    }
}

function buttonActive(button) {
    let filters = $("#filters").children();
    filters.removeClass("completed");
    filters.addClass("btn-light");
    $(button).removeClass("btn-light").addClass("completed");
}

function completedFilter(task) {
    if (task.estado) {
        return task
    }
}

function incompletedFilter(task) {
    if (!task.estado) {
        return task
    }
}






export {getTasksEnStorage, setTasksEnStorage, completedFilter, tasksLoad, buttonActive, updateTasksEnStorage, incompletedFilter}

=======
function getTasksEnStorage() {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    if (!tasks) {
        tasks = [];
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    return tasks;
}

function setTasksEnStorage(task) {
    let tasks = getTasksEnStorage();
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateTasksEnStorage(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function generateTagTask(tasks) {
    return `
            <div class="task card shadow-1 border-0 mb-4">
                <div class="card-body task-container">
                    <h4 class="task-title">${tasks.titulo}</h4>
                    <p class="task-description">${tasks.descripcion}</p>
                    <p class="task-date">${tasks.fecha}</p>
                    <a data-tarea-id="${tasks.id}" href="#" class="btn btn-link task-button ${tasks.estado ? 'completed' : 'text-warning'}">
                        <i data-tarea-id="${tasks.id}" class="fa ${tasks.estado ? 'fa-check-circle-o' : 'fa-clock-o'} fa-check-circle-o"></i>
                        <i id="trash" class="fa fa-trash-o' : 'fa-trash-o'} fa-trash-o"></i>
                    </a>
                </div>
            </div>
        `
};

function tasksLoad(tasks) {
    let htmlTareas = $(".task");
    htmlTareas.remove();
    let bgImagen = $("div.no-task");
    if (tasks.length == 0) {
        bgImagen.removeClass("no-show");
        return;
    } else {
        bgImagen.addClass("no-show");
        tasks.forEach(task => {
            let taskContainer = $('article.task-list-content');
            taskContainer.append(generateTagTask(task));
        })
    }
}

function buttonActive(button) {
    let filters = $("#filters").children();
    filters.removeClass("completed");
    filters.addClass("btn-light");
    $(button).removeClass("btn-light").addClass("completed");
}

function completedFilter(task) {
    if (task.estado) {
        return task
    }
}

function incompletedFilter(task) {
    if (!task.estado) {
        return task
    }
}






export {getTasksEnStorage, setTasksEnStorage, completedFilter, tasksLoad, buttonActive, updateTasksEnStorage, incompletedFilter}

>>>>>>> fd09b669777f1a82e631e5f8ad7448c50217691b
