//validation
const form = document.querySelector(".modal__form-js");
export function validation(e) {
  e.preventDefault();
  let error = formValidate(form);

  if (error === 0) {
  } else {
    alert("Заполните обязательные поля");
  }
}

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
