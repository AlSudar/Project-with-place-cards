export const initCard = (name, link) => {
  return `<div class="place-card">
  <img class="place-card__image" src='${link}' />
  <button class="place-card__delete-icon"></button>
  <div class="place-card__description">
    <h3 class="place-card__name">${name}</h3>
    <button class="place-card__like-icon"></button>
  </div>
 </div>`;
};
