const popup = document.querySelector('.popup');
const popupContent = document.querySelector('.popup__content');
const popupForm = document.querySelector('.popup__form');
const userInfoName = document.querySelector('.user-info__name');
const userInfoJob = document.querySelector('.user-info__job');
const userButtonEdit = document.querySelector('.user-info__edit');


const profileAuthor = {
    authorName: 'Jaques Causteau',
    jobAuthor: 'Sailor, Researcher',
}
userInfoName.textContent = profileAuthor.authorName;
userInfoJob.textContent = profileAuthor.jobAuthor;
userButtonEdit.addEventListener('click', function(event) {
    popup.classList.add("popup_is-opened");
});

function popupImgClose(event) {
    const popupClose = document.createElement('img');
    popupClose.classList.add('popup__close');
    popupClose.setAttribute('src', './images/close.svg');
    popupContent.appendChild(popupClose);
    return popupClose;
};

function popupButtonSave(event) {
    const popupButton = document.createElement('button');
    popupButton.classList.add('popup__button_is-active');
    popupButton.textContent = 'Сохранить';
    popupForm.appendChild(popupButton);
    return popupButton;
};

function popupInputName() {
    const popupInputTypeName = document.createElement('input');
    popupInputTypeName.classList.add('popup__input_type_name', 'popup__input');
    popupInputTypeName.setAttribute('value', profileAuthor.authorName);
    popupInputTypeName.setAttribute('placeholder', 'Имя');
    popupInputTypeName.setAttribute('minLength', 2);
    popupInputTypeName.setAttribute('id', 'name');
    popupInputTypeName.setAttribute('minLength', 2);
    popupInputTypeName.setAttribute('maxLength', '30');
    popupInputTypeName.setAttribute('required', true);
    popupForm.appendChild(popupInputTypeName);
    return popupInputTypeName;
}

function popupInputLink() {
    const popupInputTypeLinkUrl = document.createElement('input');
    popupInputTypeLinkUrl.classList.add('popup__input_type_link-url', 'popup__input');
    popupInputTypeLinkUrl.setAttribute('value', profileAuthor.jobAuthor);
    popupInputTypeLinkUrl.setAttribute('placeholder', 'О себе');
    popupInputTypeLinkUrl.setAttribute('minLength', 2);
    popupInputTypeLinkUrl.setAttribute('id', 'link');
    popupInputTypeLinkUrl.setAttribute('required', true);
    popupInputTypeLinkUrl.setAttribute('maxLength', '30');
    popupForm.appendChild(popupInputTypeLinkUrl);
    return popupInputTypeLinkUrl;
}
//редактирование профиля
function removeProfile(event) {
    event.preventDefault();
    popup.classList.remove("popup_is-opened");
    userInfoName.textContent = popupInputTypeName.value;
    userInfoJob.textContent = popupInputTypeLinkUrl.value;
};

popup.addEventListener('submit', removeProfile);
//закрывает попап по клику на крестик
function forPopupClose(event) {
    popup.classList.remove("popup_is-opened");
};

//Валидация
for (let i = 0; i < popupForm.length; i++) {
    popupForm[i].setAttribute('novalidate', true);
}
// Validate the field
let hasError = function(field) {
    let validity = field.validity;
    // Don't validate submits, buttons, file and reset inputs, and disabled fields
    if (field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') return;
    // Get validity
    // если всё верно вернёт null
    if (validity.valid) return;
    // If field is required and empty
    if (validity.valueMissing) { popupButton.setAttribute("disabled", "true");
        popupButton.classList.add('popup__button'); return 'Это поле обязательно для заполнения' };
    // If too short
    if (validity.tooShort) { popupButton.setAttribute("disabled", "true");
        popupButton.classList.add('popup__button'); return 'Должно быть от ' + field.getAttribute('minLength') + ' до 30 символов' };
    // If too long
    if (validity.tooLong) { popupButton.setAttribute("disabled", "true");
        popupButton.classList.add('popup__button'); return 'Должно быть от 2 до ' + field.getAttribute('maxLength') + ' символов' };

};

let showError = function(field, error) {
    // Add error class to field
    field.classList.add('error');
    // Get field id or name
    let id = field.id || field.name;
    if (!id) return;
    // Check if error message field already exists
    // If not, create one
    let message = field.form.querySelector('.popup__content_error#error-for-' + id);
    if (!message) {
        message = document.createElement('span');
        message.className = 'popup__content_error';
        message.id = 'error-for-' + id;
        field.parentNode.insertBefore(message, field.nextSibling);
    }
    field.setAttribute('aria-describedby', 'error-for-' + id);
    // Update error message
    message.innerHTML = error;
    // Show error message
    message.style.display = 'block';
    message.style.visibility = 'visible';
};
let removeError = function(field) {
    // Remove error class to field
    field.classList.remove('error');
    // Remove ARIA role from the field
    field.removeAttribute('aria-describedby');
    // Get field id or name
    let id = field.id || field.name;
    if (!id) return;
    // Check if an error message is in the DOM
    let message = field.form.querySelector('.popup__content_error#error-for-' + id + '');
    if (!message) return;
    // If so, hide it
    message.innerHTML = '';
    message.style.display = 'none';
    message.style.visibility = 'hidden';
    popupButton.removeAttribute("disabled");
    popupButton.classList.remove('popup__button');
};
// Listen to all blur events
document.addEventListener('input', function(event) {
    // Only run if the field is in a form to be validated
    if (!event.target.form.classList.contains('popup__form')) return;
    // Validate the field
    let error = hasError(event.target);
    // If there's an error, show it
    if (error) {
        showError(event.target, error);
        return;
    }
    removeError(event.target);
}, true);

root.addEventListener('click', function(event) {
    if (event.target == popupMesto || event.target == popup) {
        popupMesto.classList.remove("popup_is-opened");
        popup.classList.remove("popup_is-opened");
    }
});



const popupClose = popupImgClose();
const popupInputTypeName = popupInputName();
const popupInputTypeLinkUrl = popupInputLink();
const popupButton = popupButtonSave();
popupClose.addEventListener('click', forPopupClose);