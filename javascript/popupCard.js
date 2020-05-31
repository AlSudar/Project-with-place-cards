const popupMesto = document.querySelector('.popup__card');
const popupContentMesto = document.querySelector('.popup__content-card');
const popupFormMesto = document.querySelector('.popup__form-card');
const userInfoButton = document.querySelector('.user-info__button');
const popupMestoClose = popupForMestoClose();

function popupForMestoClose() {
    const popupMestoClose = document.createElement('img');
    popupMestoClose.classList.add('popup__close');
    popupMestoClose.setAttribute('src', './images/close.svg');
    popupContentMesto.appendChild(popupMestoClose);
    return popupMestoClose;
}

function popupForMestoButton() {
    const popupMestoButton = document.createElement('button');
    popupMestoButton.textContent = '+';
    popupMestoButton.classList.add('popup__button');
    popupMestoButton.setAttribute('font-size', '36px');
    popupMestoButton.setAttribute("disabled", "true");
    popupFormMesto.appendChild(popupMestoButton);
    return popupMestoButton;
}

function popupInputMesto() {
    const popupInputTypeMesto = document.createElement('input');
    popupInputTypeMesto.classList.add('popup__input_type_name', 'popup__input');
    popupInputTypeMesto.setAttribute('placeholder', 'Название');
    popupFormMesto.appendChild(popupInputTypeMesto);
    return popupInputTypeMesto;
}

function popupInputLinkMesto() {
    const popupInputTypeLinkMesto = document.createElement('input');
    popupInputTypeLinkMesto.classList.add('popup__input_type_link-url', 'popup__input');
    popupInputTypeLinkMesto.setAttribute('placeholder', 'Ссылка на картинку');
    popupFormMesto.appendChild(popupInputTypeLinkMesto);
    return popupInputTypeLinkMesto;
}
//закрытие Popup при добавлении карточки
function forPopupClose(event) {
    popupMesto.classList.remove("popup_is-opened");
};
//закрытие Popup по щелчку на крестик
popupMestoClose.addEventListener('click', function(event) {
    popupMesto.classList.remove("popup_is-opened");
    popupInputTypeMesto.value = '';
    popupInputTypeLinkMesto.value = '';
});
//создаёт карточку

function addCard(event) {
    event.preventDefault();

    const name = popupInputTypeMesto.value;
    const link = popupInputTypeLinkMesto.value;
    createCards(name, link)
    popupInputTypeMesto.value = '';
    popupInputTypeLinkMesto.value = '';
};

//открытие по клику
userInfoButton.addEventListener('click', function(event) {
    popupMesto.classList.add("popup_is-opened");
});
//Валидация
popupFormMesto.addEventListener('input', function() {
    if (popupInputTypeMesto.value.length <= 0 || popupInputTypeLinkMesto.value.length <= 0) {
        popupMestoButton.classList.remove('popup__button_is-active');
        popupMestoButton.classList.add('popup__button');
        popupMestoButton.setAttribute("disabled", "true");
        return
    }
    if (popupInputTypeMesto.value.length >= 1 || popupInputTypeLinkMesto.value.length >= 1) {
        popupMestoButton.classList.remove('popup__button');
        popupMestoButton.classList.add('popup__button_is-active');
        popupMestoButton.removeAttribute("disabled", "true");
        return
    }
});
root.addEventListener('click', function(event) {
    if (event.target == popupMesto || event.target == popup) {
        popupMesto.classList.remove("popup_is-opened");
        popup.classList.remove("popup_is-opened");
    }
});
const popupInputTypeMesto = popupInputMesto();
const popupInputTypeLinkMesto = popupInputLinkMesto();
const popupMestoButton = popupForMestoButton();
popupMestoButton.addEventListener('click', forPopupClose);
popupFormMesto.addEventListener('submit', addCard);