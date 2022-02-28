import { cardsMock } from "./cardsMock.js";
import { initCard } from "./initCard.js";
import { addEventsCards } from "./addEventsCards.js";
const plasecList = document.querySelector(".places-list");

// сейчас создаю карточки, потом прохожусь по массиву карточек и навешиваю событие лайка, потом прохожусь ещё раз и навешиваю событие удаления
// создавать карточку и при создании навешивать события лайка/удаления карточки

const renderCards = (arr, card, root) => {
  return arr.forEach((item) => (root.innerHTML += card(item.name, item.img)));
};

renderCards(cardsMock, initCard, plasecList);
addEventsCards();
