import { createEl } from "./createEl.js";

let tbody = document.querySelector(".clients__tbody");

// создание таблицы клиентов
export function createClientTr(client) {
  let elRowTr = createEl("tr", "clients__table-tr");
  tbody.append(elRowTr);

  //id
  let elRowTdId = createEl("td", "clients__table-td, clients__table-td-id");
  // elRowTdId.textContent = clientsArr.indexOf(client) + 1;
  elRowTr.append(elRowTdId);

  //fio
  let elRowTdFio = createEl("td", "clients__table-td");
  elRowTdFio.textContent = client.fio;
  elRowTr.append(elRowTdFio);

  //date creation
  let elRowTdDateCreation = createEl("td", "clients__table-td");
  elRowTdDateCreation.textContent = client.dateCreation;
  elRowTr.append(elRowTdDateCreation);

  //time creation
  let elRowTdTimeCreation = createEl("td", "clients__table-td, clients__table-td-time");
  elRowTdTimeCreation.textContent = client.timeCreation;
  elRowTr.append(elRowTdTimeCreation);

  //date change
  let elRowTdDateChange = createEl("td", "clients__table-td");
  elRowTdDateChange.textContent = client.dateCreation;
  elRowTr.append(elRowTdDateChange);

  //time change
  let elRowTdTimeChange = createEl("td", "clients__table-td, clients__table-td-time");
  elRowTdTimeChange.textContent = client.timeCreation;
  elRowTr.append(elRowTdTimeChange);

  //time social
  let svgSpriteSocial = () => {
    return `
      <button class="clients__table-btn btn-reset">
          <svg class="clients__table-icon-svg">
              <use xlink:href="img/icons/icons.svg#vk"></use>
          </svg>
      </button>
      `;
  };

  let elRowTdSocial = createEl("td", "clients__table-td");
  elRowTr.append(elRowTdSocial);
  elRowTdSocial.innerHTML = svgSpriteSocial();

  //changetask
  let svgSpriteClientChange = () => {
    return `
      <button class="clients__table-btn btn-reset">
        <svg class="clients__table-edit-svg">
          <use xlink:href="img/icons/icons.svg#edit"></use>
         </svg>
        <span>Изменить</span>
      </button>
      `;
  };
  let elRowTdClientChange = createEl("td", "clients__table-td");
  elRowTr.append(elRowTdClientChange);
  elRowTdClientChange.innerHTML = svgSpriteClientChange();

  //delTask
  let svgSpriteClientCancel = () => {
    return `
            <svg class="clients__table-cancel-svg">
              <use xlink:href="img/icons/icons.svg#cancel"></use>
             </svg>
            <span>Удалить</span>
          `;
  };
  let elRowTdClientCancel = createEl("td", "clients__table-td");
  elRowTr.append(elRowTdClientCancel);

  let elRowTdClientCancelBtn = createEl("button", "clients__table-btn, btn-reset", "btnCancel");
  elRowTdClientCancel.append(elRowTdClientCancelBtn);
  elRowTdClientCancelBtn.innerHTML = svgSpriteClientCancel();

  elRowTdClientCancelBtn.addEventListener("click", () => {
    const child = elRowTdClientCancelBtn.closest(".clients__table-tr");
    const parent = elRowTdClientCancelBtn.closest(".clients__tbody");
    parent.removeChild(child);
  });

  return elRowTr;
}
