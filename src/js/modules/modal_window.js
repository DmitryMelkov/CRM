export function modal_window() {
  let modal = document.querySelector(".modal-js");
  let btn = document.querySelector(".clients__add-btn-js");
  let span = document.getElementsByClassName("modal__close-js")[0];

  let modalOpen = () => {
    modal.classList.add('open')
  };

  let modalClose = () => {
    modal.classList.remove('open')
  };

  let aroundModalWindow = (e) => {
    e.preventDefault()
    if (e.target == modal) {
      modal.classList.remove('open')
    }
  };

  btn.addEventListener("click", modalOpen);
  span.addEventListener("click", modalClose);
  window.addEventListener("click", aroundModalWindow);
}


