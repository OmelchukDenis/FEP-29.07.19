import $ from 'jquery';

import "../../../common/css/normalize.css";
import "../../../common/css/skeleton.css";
import "../../../common/css/dark-theme.css";
import "../styles/list.css"

import TodoList from "./TodoList";

$(() => {
    new TodoList(
        $('#taskList'),
        $('#addTaskForm'),
        $('#taskItemTemplate').html()
    )
});