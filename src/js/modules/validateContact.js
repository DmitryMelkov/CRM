export const validateClientContact = (contactType, contactInput) => {
  const writeValue = document.getElementById('writeName');
  const onlyNumbers = /[^0-9]+$/g;
  const onlyEmail = /[^a-zA-Z|@|.]+$/g;

  //убирает ошибку и красит в обычный цвет
  const onInputValue = (input) => {
    input.addEventListener('input', () => {
      input.style.borderColor = '#B0B0B0';
      writeValue.textContent = '';
    });

    input.oncut =
      input.oncopy =
      input.onpaste =
        () => {
          input.style.borderColor = '#B0B0B0';
          writeValue.textContent = '';
        };
  };

  //красит ошибку в красный
  const showErrorMessage = (message, block, input) => {
    block.textContent = message;
    input.style.borderColor = '#F06A4D';
  };

  onInputValue(contactInput);

  if (!contactInput.value) {
    showErrorMessage('Заполните все поля контактов!', writeValue, contactInput);
    return false;
  }

  switch (contactType.innerHTML) {
    case 'Телефон':
      if (onlyNumbers.test(contactInput.value)) {
        showErrorMessage('Допустимы только цифры!', writeValue, contactInput);
        return false;
      } else if (contactInput.value.length !== 11) {
        showErrorMessage('Номер должен состоять из 11 цифр!', writeValue, contactInput);
        return false;
      }
      return true;
    case 'Email':
      if (onlyEmail.test(contactInput.value)) {
        showErrorMessage('Непарвильный Email!', writeValue, contactInput);
        return false;
      }
      return true;
    default:
      return true;
  }
};


