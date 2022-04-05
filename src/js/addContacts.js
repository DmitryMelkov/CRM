import { createEl } from "./modules/createEl.js";

export function addContacts() {
  let optionsDate = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  let optionsTime = {
    hour: "numeric",
    minute: "numeric",
  };

  let clientsArr = [
    {
      idNumber: 1,
      fio: "Ivanov Vasily Petrovich",
      firstName: "Vasily",
      middleName: "Petrovich",
      lastName: "Ivanov",
      dateCreation: new Date().toLocaleString("ru", optionsDate),
      timeCreation: new Date().toLocaleString("ru", optionsTime),
      dateChange: new Date().toLocaleString("ru", optionsDate),
      timeChange: new Date().toLocaleString("ru", optionsTime),
      clientChange: "Изменить",
      clientdel: "Удалить",
    },
    {
      idNumber: 2,
      fio: "Ivanov Dmitry Alexandrovich",
      firstName: "Dmitry",
      middleName: "Alexandrovich",
      lastName: "Ivanov",
      dateCreation: new Date().toLocaleString("ru", optionsDate),
      timeCreation: new Date().toLocaleString("ru", optionsTime),
      dateChange: new Date().toLocaleString("ru", optionsDate),
      timeChange: new Date().toLocaleString("ru", optionsTime),
      clientChange: "Изменить",
      clientdel: "Удалить",
    },
    {
      idNumber: 3,
      fio: "Petrov Michail Dmitrievich",
      firstName: "Michail",
      middleName: "Dmitrievich",
      lastName: "Petrov",
      dateCreation: new Date().toLocaleString("ru", optionsDate),
      timeCreation: new Date().toLocaleString("ru", optionsTime),
      dateChange: new Date().toLocaleString("ru", optionsDate),
      timeChange: new Date().toLocaleString("ru", optionsTime),
      clientChange: "Изменить",
      clientdel: "Удалить",
    },
  ];

  const btnSave = document.querySelector(".modal__save");
  btnSave.addEventListener("click", () => {
    let firstName = document.querySelector("#modal-name");
    let lastName = document.querySelector("#modal-surname");
    let middleName = document.querySelector("#modal-middlename");

    let firstNameValue = firstName.value;
    let lastNameValue = lastName.value;
    let middleNameValue = middleName.value;

    clientsArr.push({
      firstName: firstNameValue,
      lastName: lastNameValue,
      middleName: middleNameValue,
      fio: firstNameValue + " " + middleNameValue + " " + lastNameValue,
      dateCreation: new Date().toLocaleString("ru", optionsDate),
      timeCreation: new Date().toLocaleString("ru", optionsTime),
      dateChange: new Date().toLocaleString("ru", optionsDate),
      timeChange: new Date().toLocaleString("ru", optionsTime),
    });

    render();
  });

  //validation
  const form = document.querySelector(".modal__form-js");
  const formSend = (e) => {
    e.preventDefault();
    console.log("form click");
    let error = formValidate(form);

    if (error === 0) {

    } else {
      alert("Заполните обязательные поля");
    }
  };

  let formValidate = () => {
    let error = 0;
    let formReq = document.querySelectorAll("._req");
    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);
      if (input.value === "") {
        formAddError(input);
        error++;
      }
    }
    return error;
  };
  const formAddError = (input) => {
    input.parentElement.classList.add("_error");
    input.classList.add("_error");
  };
  const formRemoveError = (input) => {
    input.parentElement.classList.remove("_error");
    input.classList.remove("_error");
  };
  form.addEventListener("submit", formSend);

  // создание таблицы клиентов
  function createClientTr(client) {
    let elRowTr = createEl("tr", "clients__table-tr");
    tbody.append(elRowTr);

    //id
    let elRowTdId = createEl("td", "clients__table-td, clients__table-td-id");
    elRowTdId.textContent = clientsArr.indexOf(client) + 1;
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

  let tbody = document.querySelector(".clients__tbody");
  let columnSort = "idNumber";
  let dirSort = false;

  // сортировка
  document.querySelector("#number").addEventListener("click", function () {
    columnSort = "idNumber";
    dirSort = !dirSort;
    render();
  });

  document.querySelector("#fioSort").addEventListener("click", function () {
    columnSort = "fio";
    dirSort = !dirSort;
    render();
  });

  document.querySelector("#date-time-create").addEventListener("click", function () {
    columnSort = "date-time-create";
    dirSort = !dirSort;
    render();
  });

  document.querySelector("#last-changes").addEventListener("click", function () {
    columnSort = "last-changes";
    dirSort = !dirSort;
    render();
  });

  let sortClients = (clientsArr, column, dir = true) => {
    let result = clientsArr.sort(function (a, b) {
      let direction = a[column] < b[column];
      if (dir == true) {
        direction = a[column] > b[column];
      }

      if (direction == true) return -1;
    });

    return result;
  };

  //передача клиентов
  let render = () => {
    let copyclientsArr = [...clientsArr];
    copyclientsArr = sortClients(copyclientsArr, columnSort, dirSort);
    tbody.innerHTML = "";


    for (let client of copyclientsArr) {
      let newTr = createClientTr(client);
      tbody.append(newTr);
    }
  };
  render();
}
