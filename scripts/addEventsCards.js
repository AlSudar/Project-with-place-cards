import { Popup } from "./popup.js";
const plasecList = document.querySelector(".places-list");

export const addEventsCards = () => {
  const iconsLike = document.querySelectorAll(".place-card__like-icon");
  const deletiesCard = document.querySelectorAll(".place-card__delete-icon");
  const images = document.querySelectorAll(".place-card__image");

  iconsLike.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("place-card__like-icon_liked");
    });
  });

  deletiesCard.forEach((item) => {
    item.addEventListener("click", (event) => {
      const placeCard = event.target.parentElement;
      plasecList.removeChild(placeCard);
    });
  });

  images.forEach((item) => {
    const popupImage = `<img class="popup__image" alt=${item.getAttribute(
      "alt"
    )} src=${item.getAttribute("src")} />`;

    Popup(item, popupImage, () => {
      return;
    });
  });
};
