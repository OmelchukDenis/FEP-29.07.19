export function setData(data){
    localStorage.setItem('tasks', JSON.stringify(data));
}

export function getData(){
    return JSON.parse(localStorage.getItem('tasks')) || [];
}