export function modalWindow() {
  let modal = document.querySelector(".modal-js");
  let btn = document.querySelector(".clients__add-btn-js");
  let span = document.querySelector(".modal__close-js");

  let modalOpen = () => {
    modal.classList.add("open");
  };

  let modalClose = () => {
    modal.classList.remove("open");
  };

  let aroundModalWindow = (e) => {
    if (e.target == modal) {
      modal.classList.remove("open");
    }
  };

  btn.addEventListener("click", modalOpen);
  span.addEventListener("click", modalClose);
  window.addEventListener("click", aroundModalWindow);
}
