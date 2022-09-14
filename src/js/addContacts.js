import { createClientTr } from "./modules/createClientTr.js";
import { validation } from "./modules/validation.js";

export function addContacts() {
  const optionsDate = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  const optionsTime = {
    hour: "numeric",
    minute: "numeric",
  };

  let clientsArr = [
    // {
    //   idNumber: 1,
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
  ];

  const btnSave = document.querySelector(".modal__save");
  btnSave.addEventListener("click", () => {
    const firstName = document.querySelector("#modal-name");
    const lastName = document.querySelector("#modal-surname");
    const middleName = document.querySelector("#modal-middlename");

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

  //валидация
  const form = document.querySelector(".modal__form-js");
  form.addEventListener("submit", validation);

  // сортировка
  let columnSort = "idNumber";
  let dirSort = false;

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

  const sortClients = (clientsArr, column, dir = true) => {
    let result = clientsArr.sort(function (a, b) {
      let direction = a[column] < b[column];
      if (dir == true) {
        direction = a[column] > b[column];
      }

      if (direction == true) return -1;
    });

    return result;
  };
  const tbody = document.querySelector(".clients__tbody");
  //передача клиентов
  const render = () => {
    let copyclientsArr = [...clientsArr];
    copyclientsArr = sortClients(copyclientsArr, columnSort, dirSort);
    tbody.innerHTML = "";

    for (let client of copyclientsArr) {
      let newTr = createClientTr(client);
      tbody.append(newTr);
    }
  };
  render();

  //создает дело
  async function createClient() {
    let clientTr = createClientTr();

    const response = await fetch("http://localhost:3000/api/clients", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Ivan",
        surname: "Ivanovich",
        lastName: "Ivanov",
      }),
    });

    const data = await response.json();
    console.log(data);
  }
  createClient();
}
