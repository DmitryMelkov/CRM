import { selectCustom } from "./modules/selectCustom.js";
import { createEl } from "./modules/createEl.js";


export function addContactsModal() {

  let svgSpriteChoice = () => {
    return `
    <span class="modal-select__current select__current">Телефон</span>
    <svg class="modal-select__icon-svg">
      <use xlink:href="img/icons/icons.svg#choice"></use>
    </svg>
    `;
  };

  let modalSelectItem = () => {
    return `
    <div class="modal-select__item select__item">Телефон</div>
    <div class="modal-select__item select__item">Доп. телефон</div>
    <div class="modal-select__item select__item">Email</div>
    <div class="modal-select__item select__item">Vk</div>
    <div class="modal-select__item select__item">Facebook</div>
    `;
  };

  let svgSpriteClose = () => {
    return `
    <svg class="modal__add-btn-svg-close">
      <use xlink:href="img/icons/icons.svg#close"></use>
    </svg>
    `;
  };

  let createElBtn = () => {
    const ul = document.querySelector(".modal__add-contact-list");
    const li = createEl("li", "modal__add-contact-item");
    ul.append(li);

    //modal-select
    const modalSelect = createEl("div", "modal-select, select");
    li.append(modalSelect);

    const modalSelectHeader = createEl("button", "modal-select__header, select__header, btn-reset");
    modalSelect.append(modalSelectHeader);
    modalSelectHeader.innerHTML = svgSpriteChoice();

    const modalSelectBody = createEl("div", "modal-select__body");
    modalSelect.append(modalSelectBody);
    modalSelectBody.innerHTML = modalSelectItem();

    selectCustom();

    //modal-input
    const modalAddContactLabel = createEl("label", "modal__add-contact-label");
    li.append(modalAddContactLabel);
    const modalAddContactInput = createEl(
      "input",
      "modal__add-contact-input",
      "",
      "",
      "tel",
      "Введите данные контакта"
    );
    modalAddContactLabel.append(modalAddContactInput);

    //modal-btn-add
    const modalAddContactClose = createEl("button", "modal__add-contact-close, btn-reset");
    li.append(modalAddContactClose);
    modalAddContactClose.innerHTML = svgSpriteClose();
    modalAddContactClose.addEventListener("click", () => {
      const child = modalAddContactClose.closest(".modal__add-contact-item");
      const parent = modalAddContactClose.closest(".modal__add-contact-list");
      parent.removeChild(child);
    });
  };

  const addContact = document.querySelector(".modal__add-btn");
  addContact.addEventListener("click", createElBtn);


}

// selectItem.forEach((item) => {
//   item.addEventListener("click", () => {
//     let text = item.innerText;
//     let select = this.closest(".modal__add-contact-item").querySelector(".select");
//     let currentText = select.querySelector(".select__current");
//     currentText.innerText = text;
//     modalSelectHeader.closest(".select").classList.remove("is-active");
//   });
// });
