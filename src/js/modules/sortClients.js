// import { render } from "../addContacts.js";

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

// сортировка
export function sortClients(clientsArr, column, dir = true) {
  let result = clientsArr.sort(function (a, b) {
    let direction = a[column] < b[column];
    if (dir == true) {
      direction = a[column] > b[column];
    }

    if (direction == true) return -1;
  });

  return result;
}
