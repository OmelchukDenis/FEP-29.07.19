const listElement = document.getElementById('list');
const countInput = document.getElementById('count');
const liTemplate = document.getElementById('liTemplate')
                                            .innerHTML;


document.getElementById('addBtn')
            .addEventListener('click', onAddButtonClick);

function onAddButtonClick(){
    generateNewList();
}

function generateNewList(){
    const count = +countInput.value || 0;
    let template = '';

    for(let i = 0; i < count; i++){
        template += generateLi(i + 1);
    }

    listElement.innerHTML = template;
}

function generateLi(index){
    return liTemplate.replace('{{index}}', index);
}