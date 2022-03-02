import { Popup } from "./popup.js";

const userName = document.querySelector(".user-info__name");
const userAbout = document.querySelector(".user-info__job");
const userButtonEdit = document.querySelector(".user-info__edit");

userName.textContent = "Jaques Causteau";
userAbout.textContent = "Sailor, Researcher";

const editUserInfo = () => {
  const popupEditInfo = document.querySelector(".popup__form");
  const editUserInfo = popupEditInfo.querySelector(".popup__button");
  const editUserName = popupEditInfo.querySelector(".popup__input_type_name");
  const editUserAbout = popupEditInfo.querySelector(
    ".popup__input_type_link-url"
  );
  const inputErrorName = popupEditInfo.querySelector(
    ".popup__input-error-name"
  );
  const inputErrorAbout = popupEditInfo.querySelector(
    ".popup__input-error-about"
  );

  editUserName.setAttribute("value", `${userName.textContent}`);
  editUserAbout.setAttribute("value", `${userAbout.textContent}`);

  editUserName.addEventListener("input", () => {
    if (editUserName.value.length > 1 && editUserName.value.length < 30) {
      inputErrorName.classList.remove("popup__input-error_active");
      editUserInfo.removeAttribute("disabled");
    } else {
      inputErrorName.classList.add("popup__input-error_active");
      editUserName.value.length === 0
        ? (inputErrorName.textContent = "Поле обязательно для заполнения")
        : (inputErrorName.textContent =
            "Количество символов должно быть не меньше 2, и не больше 30");
      editUserInfo.setAttribute("disabled", "true");
    }
  });

  editUserAbout.addEventListener("input", () => {
    if (editUserAbout.value.length > 1 && editUserAbout.value.length < 30) {
      inputErrorAbout.classList.remove("popup__input-error_active");
      editUserInfo.removeAttribute("disabled");
    } else {
      inputErrorAbout.classList.add("popup__input-error_active");
      editUserAbout.value.length === 0
        ? (inputErrorAbout.textContent = "Поле обязательно для заполнения")
        : (inputErrorAbout.textContent =
            "Количество символов должно быть не меньше 2, и не больше 30");
      editUserInfo.setAttribute("disabled", "true");
    }
  });

  editUserInfo.addEventListener("click", (event) => {
    event.preventDefault();
    userName.textContent = editUserName.value;
    userAbout.textContent = editUserAbout.value;
    document.querySelector(".popup").classList.remove("popup_is-opened");
  });
};
// по клику на элемент генерируем html, в html передаём параметры
let popupUserInfoEdit = `<form class="popup__form" name="profile">
  <h3 class="popup__title">Редактирование профиля</h3>
  <input class="popup__input_type_name popup__input" minLength="2" maxLength="30" value='${userName.textContent}' type="text" required="required" placeholder="Имя" />
  <span class="popup__input-error popup__input-error-name"></span>
  <input class="popup__input_type_link-url popup__input" minLength="2" maxLength="30"  value='${userAbout.textContent}' type="text" required="required" placeholder="О себе" />
  <span class="popup__input-error popup__input-error-about"></span>
  <button class="popup__button" disabled="true">Редактировать</button>
  </form>`;

Popup(userButtonEdit, popupUserInfoEdit, editUserInfo);
