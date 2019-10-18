const addTaskForm = document.getElementById('addTaskForm');
const taskNameInput = document.getElementById('taskNameInput');
const taskList = document.getElementById('taskList');
const taskItemTemplate = document.getElementById('taskItemTemplate').innerHTML;

addTaskForm.addEventListener('submit', onAddTaskFormSubmit);
taskList.addEventListener('click', onTaskListClick);

getList();

function getList(){
    return fetch('https://jsonplaceholder.typicode.com/todos?_limit=15')
        .then(res => res.json())
        .then(renderList)
}

function renderList(data){
    data.forEach(addTask);
}

function onAddTaskFormSubmit(event){
    event.preventDefault();

    submitForm();
}



function onTaskListClick(event){
    switch (true){
        case event.target.classList.contains('task-item'):
            toggleTaskState(event.target);
            break
        case event.target.classList.contains('delete-btn'):
            deleteTask(event.target.parentElement);
            break
    }
}

function submitForm(){
    const task = { title: taskNameInput.value };
    fetch('https://jsonplaceholder.typicode.com/todos/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(task)
    })
    .then((res) => res.json())
    .then((data) => {
        task.id = data.id;
        addTask(task);
    });

    resetForm();
}

function addTask(task){
    const html = taskItemTemplate
        .replace('{{title}}', task.title)
        .replace('{{id}}', task.id);

    const newTaskEl = htmlToElement(html)
    taskList.appendChild(newTaskEl);
}

function resetForm(){
    addTaskForm.reset();
}

function toggleTaskState(el){
    el.classList.toggle('done');
}

function deleteTask(el){
    fetch('https://jsonplaceholder.typicode.com/todos/' + el.dataset.todoId, {
        method: 'DELETE'
    }).then(() => {
        el.remove();
    })
}

function htmlToElement(html) {
    const template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
}