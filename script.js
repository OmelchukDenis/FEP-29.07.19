const TODO_ITEM_DONE_CLASS = 'done';
const TODO_ITEM_CLASS = 'todo-list-item';
const DELETE_BUTTON_CLASS = 'delete-button';

const todoListElement = document.getElementById('todoList');
const newTodoListForm = document.getElementById('newTodoItemForm');
const newTodoItemTitleInput = document.getElementById('newTodoItemTitleInput');
const todoListItemTemplate = document.getElementById('todoListItemTemplate').innerHTML;

todoListElement.addEventListener('click', onTodoListElementClick)
newTodoListForm.addEventListener('submit', onNewTodoListFormSubmit)

let todoListItems = [];

init();

function onTodoListElementClick(e){
    const element = e.target;
    switch (true){
        case element.classList.contains(DELETE_BUTTON_CLASS):
                deleteTodoItem(element.parentElement.dataset.todoId);
            break;
        case element.classList.contains(TODO_ITEM_CLASS):
                toggleTodoItem(element.dataset.todoId)
            break;
    }
}

function onNewTodoListFormSubmit(e){
    e.preventDefault();

    submitTodoItem();
}

function init(){
    todoListItems = getState();
    renderList(todoListItems);
}

function rerender(){
    renderList(todoListItems);
}

function renderList(list){
    const todoItemsHtml = list.map(getTodoItemHtml);

    todoListElement.innerHTML = todoItemsHtml.join('\n');
}

function getTodoItemHtml(todo){
        return todoListItemTemplate
            .replace('{{id}}', todo.id)
            .replace('{{title}}', todo.title)
            .replace('{{class}}', todo.isDone ? TODO_ITEM_DONE_CLASS : '')
}

function deleteTodoItem(todoId){
    todoListItems = todoListItems.filter(el => el.id != todoId);
    saveState();

    deleteTodoItemElement(todoId);
}

function deleteTodoItemElement(id){
    const element = getTodoItemElement(id);

    element && element.remove();
}

function getTodoItemElement(id){
    return todoListElement.querySelector(`[data-todo-id="${id}"]`)
}

function toggleTodoItem(id){
    const todo = todoListItems.find((el) => el.id == id);

    todo.isDone = !todo.isDone;
    saveState();

    setTodoElementClass(todo);
}

function setTodoElementClass(todo){
    const element = getTodoItemElement(todo.id);

    if ( todo.isDone){
        element.classList.add(TODO_ITEM_DONE_CLASS)
    } else {
        element.classList.remove(TODO_ITEM_DONE_CLASS)
    }
}

function submitTodoItem(){
    createTodoItem(newTodoItemTitleInput.value);

    newTodoListForm.reset();
}

function createTodoItem(title){
    const newTodo = {
        title,
        id: Date.now(),
        isDone: false
    }

    addTodoItem(newTodo);
}

function addTodoItem(todo){
    todoListItems.push(todo);
    saveState();

    addTodoItemElement(todo);
}

function addTodoItemElement(todo){
    const todoItemHtml = getTodoItemHtml(todo);

    todoListElement.insertAdjacentHTML('beforeend', todoItemHtml);
}

function saveState(){
    localStorage.setItem('todoList', JSON.stringify(todoListItems));
}

function getState(){
    const data = localStorage.getItem('todoList');

    return data ? JSON.parse(data) : [];
}