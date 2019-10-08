const addContactBtn = document.getElementById('addContactBtn');
const addContactForm = document.getElementById('addContactForm');
const contactsList = document.getElementById('contactsList');
const contactNameInput = document.getElementById('nameInput');
const contactSurnameInput = document.getElementById('surnameInput');
const contactPhoneInput = document.getElementById('phoneInput');
const contactTemplate = document.getElementById('contactTemplate').innerHTML;

addContactForm.addEventListener('submit', onAddContactFormSubmit);
contactsList.addEventListener('click', onContactsListClick);
addContact({name: 'Alex', surname:'Smith', phone:'111'});

function onAddContactFormSubmit(e){
    e.preventDefault();
    submitContact();
}

function onContactsListClick(event){
    if (event.target.tagName === 'BUTTON'){
        removeContact(event.target.parentNode.parentNode);
    }
}

function removeContact(el){
    el.remove();
}

function submitContact(){
    if (isFormValid()){
        const contact = {
            name: contactNameInput.value,
            surname: contactSurnameInput.value,
            phone: contactPhoneInput.value,
        }
        addContact(contact);
        resetContactForm();
    } else {
        alert('Drom is invalid')
    }
}

function addContact(contact){
    const contactTr = document.createElement('tr');
    
    contactTr.innerHTML = contactTemplate
                .replace('{{surname}}', contact.surname)
                .replace('{{name}}', contact.name)
                .replace('{{phone}}', contact.phone);

    contactsList.appendChild(contactTr);

}

function isFormValid(){
    return isFieldValid(contactNameInput)
            && isFieldValid(contactSurnameInput)
            && contactPhoneInput.value
            && !isNaN(contactPhoneInput.value);
}

function isFieldValid(elm){
    if (elm.value){
        elm.classList.remove('invalid');
        return true;
    } else {
        elm.classList.add('invalid');
        return false;
    }
}

function resetContactForm(){
    addContactForm.reset();
    // contactNameInput.value = '';
    // contactSurnameInput.value = '';
    // contactPhoneInput.value = '';
}
