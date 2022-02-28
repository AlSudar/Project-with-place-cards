import { Popup } from "./popup.js";
import { initCard } from "./initCard.js";
import { addEventsCards } from "./addEventsCards.js";
const buttonPopupOpen = document.querySelector(".user-info__button");
const rootCards = document.querySelector(".places-list");

const NewCard = (event) => {
  const popupFormCard = document.querySelector(".popup__form-card");
  const addNewCard = document.querySelector(".popup__button");
  const newCardName = popupFormCard.querySelector(".popup__input_type_name");
  const newCardImg = popupFormCard.querySelector(".popup__input_type_link-url");

  newCardName.addEventListener("input", () => {
    if (newCardName.value.length && newCardImg.value.length > 0) {
      addNewCard.removeAttribute("disabled");
    } else {
      addNewCard.setAttribute("disabled", "true");
    }
  });

  newCardImg.addEventListener("input", () => {
    if (newCardName.value.length && newCardImg.value.length > 0) {
      addNewCard.removeAttribute("disabled");
    } else {
      addNewCard.setAttribute("disabled", "true");
    }
  });

  addNewCard.addEventListener("click", (event) => {
    event.preventDefault();
    rootCards.innerHTML += initCard(newCardName.value, newCardImg.value);
    addEventsCards();
    document.querySelector(".popup").classList.remove("popup_is-opened");
  });
};

const popupContent = `<form class="popup__form-card popup__form" name="new">
                        <h3 class="popup__title">Новое место</h3>
                        <input class="popup__input_type_name popup__input" type="text" required="required" placeholder="Название" />
                        <input class="popup__input_type_link-url popup__input" type="text" required="required" placeholder="Ссылка на картинку" />
                        <button class="popup__button" disabled="true">+</button>
                      </form>`;

Popup(buttonPopupOpen, popupContent, NewCard);
