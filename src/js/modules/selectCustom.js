export let selectCustom = () => {
  // Полифилл для метода forEach для NodeList
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }

  const modalselect = document.querySelectorAll(".select");
  const modalContent = document.querySelector(".modal-content-js");

  modalselect.forEach(function (dropDownWrapper) {
    const selectHeader = dropDownWrapper.querySelector(".select__header");
    const selectList = dropDownWrapper.querySelector(".modal-select__body");
    const selectItem = selectList.querySelectorAll(".select__item");
    const currentText = dropDownWrapper.querySelector(".select__current");

    // Клик по кнопке. Открыть/Закрыть select
    selectHeader.addEventListener("click", function () {
      selectList.classList.toggle("is-active");
    });

    // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
    selectItem.forEach(function (listItem) {
      listItem.addEventListener("click", function (e) {
        e.stopPropagation(); //остановка передачи клика наверхк родителю
        currentText.innerText = this.innerText;
        selectHeader.focus();
        selectList.classList.remove("is-active");
      });
    });

    // Клик снаружи дропдауна. Закрыть дропдаун
    modalContent.addEventListener("click", function (e) {
      console.log("click");
      if (e.target !== selectHeader) {
        selectList.classList.remove("is-active");
      }
    });

    // Нажатие на Tab или Escape. Закрыть дропдаун
    modalContent.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        selectList.classList.remove("is-active");
      }
    });
  });
};
