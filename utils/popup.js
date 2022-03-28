const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__close");
const popupWrapperContent = document.querySelector(".popup__wrapper-content");

export const Popup = (popupStateEvent, popupContent, callback) => {
  popupStateEvent.addEventListener("click", () => {
    console.log(popupContent);
    popupWrapperContent.innerHTML = popupContent;
    popup.classList.add("popup_is-opened");
    callback();
  });

  popup.addEventListener("click", (event) => {
    if (event.target.classList.contains("popup_is-opened")) {
      popup.classList.remove("popup_is-opened");
      popupContent = "";
    }
  });

  popupClose.addEventListener("click", () => {
    popup.classList.remove("popup_is-opened");
    popupContent = "";
  });
};
