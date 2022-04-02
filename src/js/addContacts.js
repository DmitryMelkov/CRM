import JustValidate from "just-validate";
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
    // {
    //   id: 3,
    //   fio: "Ivanov Vasily Petrovich",
    //   firstName: "Vasily",
    //   middleName: "Petrovich",
    //   lastName: "Ivanov",
    //   dateCreation: new Date().toLocaleString("ru", optionsDate),
    //   timeCreation: new Date().toLocaleString("ru", optionsTime),
    //   dateChange: new Date().toLocaleString("ru", optionsDate),
    //   timeChange: new Date().toLocaleString("ru", optionsTime),
    //   clientChange: "Изменить",
    //   clientdel: "Удалить",
    // },
    {
      idNumber: 1,
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
  ];

  //validation
  //валидация

  let firstName = document.getElementById("modal-name");
  let lastName = document.querySelector("#modal-surname");
  let middleName = document.querySelector("#modal-middlename");
  console.log(firstName);

  new JustValidate(".modal__form", {
    rules: {
      firstName: {
        required: true,
        minLength: 3,
        maxLength: 30,
      },
      lastName: {
        required: true,
        minLength: 3,
        maxLength: 30,
      },
      middleName: {
        required: true,
        minLength: 3,
        maxLength: 30,
      },
    },
    messages: {
      firstName: {
        required: "Укажите имя",
      },
      lastName: {
        required: "Укажите фамилию",
      },
      middleName: {
        required: "Укажите отчество",
      },
    },

    colorWrong: "red",

    submitHandler: function () {
      console.log("submitHandler");

      let idNumber = 1;
      let fioValue = firstName.value + middleName.value + lastName.value;

      clientsArr.push({
        idNumber: idNumber,
        fio: fioValue,
      });
      render();
    },
  });

  // создание tr
  function createClientTr(client) {
    let elRowTr = createEl("tr", "clients__table-tr");
    tbody.append(elRowTr);

    //id
    let elRowTdId = createEl("td", "clients__table-td, clients__table-td-id");
    elRowTdId.textContent = client.idNumber;
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
    console.log("sort");
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
    console.log(copyclientsArr);
    copyclientsArr = sortClients(copyclientsArr, columnSort, dirSort);

    tbody.innerHTML = "";

    for (let client of copyclientsArr) {
      let newTr = createClientTr(client);

      tbody.append(newTr);
      console.log("rener");
    }
  };

  // render();

  const btnSave = document.querySelector(".modal__save");
  btnSave.addEventListener("click", render);
}
