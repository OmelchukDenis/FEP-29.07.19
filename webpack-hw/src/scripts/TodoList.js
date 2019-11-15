import $ from 'jquery';
import { setData, getData } from "./storage";

export default class TodoList {
    constructor($list, $form, template) {
        this.$list = $list;
        this.$form = $form;
        this.template = template;
        this.tasks = [];

        this.init();
    }

    init() {
        this.bindEventListeners();
        this.restoreData();
        this.renderTasks();
        console.log('init')
    }

    bindEventListeners() {
        this.$form.on('submit', this.onAddTaskFormSubmit.bind(this));
        this.$list.on('click', '.delete-btn', this.onDeleteTaskClick.bind(this));
        this.$list.on('click', '.task-item', this.onTaskItemClick.bind(this));
    }

    onAddTaskFormSubmit(e) {
        e.preventDefault();
        const task = { };

        this.$form.serializeArray().forEach(({name, value}) => {
            task[name] = value;
        });

        this.createTask(task);

        this.resetForm();
    }

    onDeleteTaskClick(e) {
        const id = $(e.target).closest('.task-item').data('todoId');
        this.deleteTask(id);
    }

    onTaskItemClick(e) {
        const id = $(e.target).data('todoId');
        this.toggleTask(id);
    }

    resetForm(){
        this.$form[0].reset();
    }

    restoreData() {
        this.tasks = getData();
    }

    saveData(){
        setData(this.tasks);
    }

    renderTasks() {
        this.$list.empty();
        this.tasks.forEach((task) => this.renderTask(task));
    }

    renderTask(task) {
        const $task = $(this.template
            .replace('{{title}}', task.title)
            .replace('{{id}}', task.id)
        );

        if(task.isDone){
            $task.addClass('done')
        }

        this.$list.append($task);
    }

    createTask(task){
        task.id = Date.now();
        task.isDone = false;

        this.tasks.push(task);
        this.renderTask(task);
        this.saveData();
    }

    deleteTask(id){
        this.tasks = this.tasks.filter((task) => task.id !== id);

        this.saveData();
        this.renderTasks();
    }

    toggleTask(id){
        const task = this.tasks.find((task) => task.id === id);
        task.isDone = !task.isDone;

        this.saveData();
        this.renderTasks();
    }
}