$(function(){
    const $todoList = $('#todoList');
    const $newTodoForm = $('#newTodoForm');
    const todoItemTemplate = $('#todoItemTemplate').html();

    let todoListItems = [
        {
            title: 'Hello',
            isDone: true
        },
        {
            title: 'Hello',
            isDone: true
        },
        {
            title: 'Hello',
            isDone: true
        },
        {
            title: 'Hello',
            isDone: true
        },
        {
            title: 'Hello',
            isDone: true
        },
        {
            title: 'Hello',
            isDone: true
        },
        {
            title: 'Hello',
            isDone: true
        },
        {
            title: 'Hello',
            isDone: true
        },
        {
            title: 'Another',
            isDone: false
        },
        {
            title: 'Third',
            isDone: false
        },
    ].map((el, index) => {
        el.id = index;
        el.title = 'Title ' + index;

        return el;
    });

    $todoList.on('click', '.delete-btn', onDeleteBtnClick)
    $todoList.on('click', '.todo-item', onTodoItemClick)
    $newTodoForm.on('submit', onNewTodoFormSubmit)
    init();

    function init(){
        fetchTodoList();
        // renderTodoList();
    }

    function fetchTodoList(){
        $.ajax('https://jsonplaceholder.typicode.com/todos')
            .done((data) => {
                setData(data);
            })
            .fail()
            .always()
    }

    function onDeleteBtnClick(e){
        const $todoItem = $(this).parent();

        deleteTodoItem($todoItem.data('todoIndex'));
        
    }

    function onTodoItemClick(e){
        toggleTodoItem($(this).data('todoIndex'));
    }

    function onNewTodoFormSubmit(e){
        e.preventDefault();

        submitNewItem()
    }

    function setData(data){
        todoListItems = data;

        renderTodoList()
    }

    function renderTodoList(){
        const todoListItemsHtml = todoListItems.map(el => {
            return getTodoItemHtml(el);
        });

        $todoList.html(todoListItemsHtml.join(''));
    }

    function getTodoItemHtml({id, title, isDone}){
        return todoItemTemplate
                        .replace('{{id}}', id)
                        .replace('{{title}}', title)
                        .replace('{{isDoneClass}}', isDone ? 'done' : '')
    }

    function getTodoElementById(id){
        return  $(`[data-todo-index="${id}"]`);
    }

    function deleteTodoItem(idToDelete){
        $.ajax({
            method: 'DELETE',
            url: 'https://jsonplaceholder.typicode.com/todos/' + idToDelete
        })
        .done(() => {
            todoListItems = todoListItems.filter(({id}) => id != idToDelete);
    
            getTodoElementById(idToDelete).remove();
        })
    }

    function submitNewItem(){

        const newTodoItem = {
            id: Date.now(),
            isDone: false
        }

        $newTodoForm.serializeArray().forEach(({name, value}) => {
            newTodoItem[name] = value;
        })

        todoListItems.push(newTodoItem);

        $todoList.append(getTodoItemHtml(newTodoItem))
    }

    function toggleTodoItem(idToToggle){

        const todoItem = todoListItems.find(({id}) => id == idToToggle);

        todoItem.isDone = !todoItem.isDone;

        toggleTodoElementState(todoItem)
    }

    function toggleTodoElementState({id, isDone}){
        const $todoItem = getTodoElementById(id);

        $todoItem.removeClass('done')

        if(isDone) {
            $todoItem.addClass('done');
        }
    }

})