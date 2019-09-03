// const btn = document.getElementById('btn');
// const div = document.getElementById('div');
// const list = document.getElementById('list');
// const lis = document.querySelectorAll('#list > li');

// // list.addEventListener('click', onClick);

// btn.addEventListener('click', onAddBtnClick);
// div.addEventListener('click', onDivClick);


// function onClick(e){
//     // console.log('clicked', e.target, this)
//     e.stopPropagation();
//     e.target.classList.toggle('clicked')
// }

function onAddBtnClick(e){
    // e.preventDefault();
    const li = createLi();
    list.append(li);
}

function createLi(){
    const li = document.createElement('li');

    li.innerText
    li.textContent = 'Hello world';
    return li;
}

// function onDivClick(e){
//     e.target.classList.toggle('clicked')
//     console.log('div', e.target, this);
// }







document.getElementsByTagName('form')[0]
    .addEventListener('submit', onFormSubmit);

function onFormSubmit(e){
    // e.preventDefault();
    console.log('submit');
}