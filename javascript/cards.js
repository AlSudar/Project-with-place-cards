const root = document.querySelector('.root');
const plasecList = document.querySelector('.places-list');
const userInfo = document.querySelector('.button');
const popupImage = document.querySelector('.popup__image');


function startArr(arr) {
    for (let i = 0; i < initialCards.length; i++) {
        createCards(initialCards[i].name, initialCards[i].link);

    }
};

function createCards(name, link) {

    const placeCard = document.createElement('div');
    const placeCardImage = document.createElement('div');
    const placeCardDeleteIcon = document.createElement('button');
    const placeCardDescription = document.createElement('div');
    const placeCardName = document.createElement('h3');
    const placeCardLikeIcon = document.createElement('button');
    const userInfoButton = document.createElement('button');



    placeCard.classList.add('place-card');
    userInfoButton.classList.add('user-info__button');
    placeCardImage.classList.add('place-card__image');
    placeCardDeleteIcon.classList.add('place-card__delete-icon');
    placeCardDescription.classList.add('place-card__description');
    placeCardName.classList.add('place-card__name');
    placeCardLikeIcon.classList.add('place-card__like-icon');
    placeCardImage.setAttribute('style', ('style', `background-image: url(${link})`));
    placeCardName.textContent = name;


    plasecList.appendChild(placeCard);
    placeCard.appendChild(placeCardImage);
    placeCard.appendChild(placeCardDeleteIcon);
    placeCard.appendChild(placeCardDescription);
    placeCardDescription.appendChild(placeCardName);
    placeCardDescription.appendChild(placeCardLikeIcon);

    placeCardImage.addEventListener('click', function(event) {
        const popupContentImage = document.createElement('div');
        const popupClose = document.createElement('img');
        popupContentImage.classList.add('popup__image-opened');
        popupClose.classList.add('popup__close');
        popupClose.setAttribute('src', './images/close.svg');
        root.appendChild(popupImage);
        popupImage.appendChild(popupContentImage);
        popupContentImage.appendChild(popupClose);
        popupImage.classList.add('popup_is-opened');
        popupContentImage.setAttribute('style', `background-image: url(${link});
  `);

        popupClose.addEventListener('click', function() {
            popupImage.classList.remove("popup_is-opened");
        });
    });

    function deleteCard(event) {
        if (event.target.classList.contains('place-card__delete-icon')) {
            const placeCard = event.target.parentElement;
            plasecList.removeChild(placeCard);
        }
    };
    placeCardDeleteIcon.addEventListener('click', deleteCard);

    placeCardLikeIcon.addEventListener('click', function(event) {
        event.target.classList.toggle('place-card__like-icon_liked');
    });

    window.addEventListener('click', function(event) {
        if (event.target == popupImage) {
            popupImage.classList.remove("popup_is-opened");
        }
    });

};

startArr(initialCards);