const DATA_URL = 'https://jsonplaceholder.typicode.com/users';
const USER_ROW_TEMPLATE = document.getElementById('userRowTemplate').innerHTML;
const LOADING_CLASS = 'loading';
const MODE_ADD_CLASS = 'mode-add';

const usersListElement = document.getElementById('usersList');
const usersInfoElement = document.getElementById('userInfo');
const nameInputElement = document.getElementById('nameInput');
const usernameInputElement = document.getElementById('usernameInput');
const emailInputElement = document.getElementById('emailInput');
const phoneInputElement = document.getElementById('phoneInput');
const idInputElement = document.getElementById('idInput');
const userFormElement = document.getElementById('userForm');

usersListElement.addEventListener('click', onUsersListClick);
document.getElementById('addNewUserBtn').addEventListener('click', onAddNewUserBtnClick);
document.getElementById('deleteUserBtn').addEventListener('click', onDeleteUserBtnClick);
userFormElement.addEventListener('submit', onSaveUserBtnClick);

init();


function onUsersListClick(e){
    const id = e.target.dataset.userId;
    
    if (id){
        getUserData(id);
    }
}

function onAddNewUserBtnClick(){
    openNewUserForm();
}

function onDeleteUserBtnClick(){
    deleteUser(idInputElement.value);
}

function onSaveUserBtnClick(e){
    e.preventDefault();
    saveUser();
}

function init(){
    getUsersList()
    openNewUserForm()
    // .then(data => {
    //     return getUserData(data[0].id);
    // });
}
function requestJson(url, method = 'GET', body = null){
    document.body.classList.add(LOADING_CLASS);
    return fetch(url, { method, body})
        .then(res => res.json())
        .catch(err => console.warn(err))
        .finally(() => document.body.classList.remove(LOADING_CLASS))
}

function getUsersList(){
    return requestJson(DATA_URL)
    .then(renderData)
}

function getUserData(id){
    return requestJson(`${DATA_URL}/${id}`)
    .then(openUserForm);
}

function deleteUser(id){
    return requestJson(`${DATA_URL}/${id}`, 'DELETE')
        .then(() => {
            deleteElementFromList(id);
            openNewUserForm();
        })
}

function deleteElementFromList(id){
    const el = getUserElement(id);
    el.remove();
}

function getUserElement(id){
    return document.querySelector(`[data-user-id="${id}"]`).parentElement;
}

function renderData(data){
    const usersTemplates = data.map(getUserElementHtml)

    usersListElement.innerHTML = usersTemplates.join('\n');
    return data;
}

function openUserForm(user){
    userFormElement.reset();


    idInputElement.value = user.id;
    nameInputElement.value = user.name;
    usernameInputElement.value = user.username;
    emailInputElement.value = user.email;
    phoneInputElement.value = user.phone;

    usersInfoElement.classList.remove(MODE_ADD_CLASS);

    console.log(user);
}

function openNewUserForm(){
    userFormElement.reset();
    idInputElement.value = '';

    nameInputElement.focus();

    usersInfoElement.classList.add(MODE_ADD_CLASS);
}

function saveUser(){
    const user = getFormData();

    if (user.id){
        updateUser(user)
    } else {
        createUser(user)
    }
}

function getFormData(){
    return {
        id: idInputElement.value,
        name: nameInputElement.value,
        username: usernameInputElement.value,
        email: emailInputElement.value,
        phone: phoneInputElement.value,
    }
}

function createUser(user){
    delete user.id;

    return requestJson(DATA_URL, 'POST', JSON.stringify(user))
        .then((data) => {
            user.id = data.id;

            addUserToList(user)
        })
}

function updateUser(user){
    return requestJson(`${DATA_URL}/${user.id}`, 'PUT', JSON.stringify(user))
        .then(() => {
            updateUserInList(user)
        })
}

function addUserToList(user){
    const el = createUserElement(user)
    usersListElement.append(el);
}

function updateUserInList(user){
    const newEl = createUserElement(user);
    const currentElement = getUserElement(user.id);
    currentElement.replaceWith(newEl); 
}

function createUserElement(user) {
    const html = getUserElementHtml(user);

    return htmlToElement(html);
}

function getUserElementHtml(user){
    return USER_ROW_TEMPLATE
        .replace('{{name}}', user.name)
        .replace('{{id}}', user.id);
}

function htmlToElement(html) {
    const template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
}