export function createContacts() {
  let createEl = (tagName = "", elClass = "", elId = "", textContent = "", type = "", placeholder = "", svg = "") => {
    const el = document.createElement(`${tagName}`);
    if (elClass !== "") {
      const arrayClass = elClass.split(",");
      for (let i = 0; i < arrayClass.length; i++) {
        el.classList.add(arrayClass[i].trim());
      }
    }
    if (elId !== "") {
      el.id = `${elId}`;
    }
    if (textContent !== "") {
      el.textContent = `${textContent}`;
    }
    if (type !== "") {
      el.type = `${type}`;
    }
    if (placeholder !== "") {
      el.placeholder = `${placeholder}`;
    }
    if (svg !== "") {
      el.svg = `${svg}`;
    }
    return el;
  };

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
  };

  createElBtn();

  const addContact = document.querySelector(".modal__add-btn");
  addContact.addEventListener("click", createElBtn);

  const deleteContact = document.querySelector(".modal__add-contact-close");
  deleteContact.addEventListener("click", () => {
    console.log("del");
  });
}
