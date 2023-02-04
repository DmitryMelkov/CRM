export const validateClientForm = () => {
  const userName = document.getElementById('floatingName');
  const userSurname = document.getElementById('floatingSurname');
  const userLastName = document.getElementById('floatingLastName');
  const unacceptableLetter = document.getElementById('unacceptableLetter');
  const writeName = document.getElementById('writeName');
  const writeSurname = document.getElementById('writeSurname');
  const writeLastName = document.getElementById('writeLastName');
  const requiredValue = document.getElementById('requiredValue');
  const validateArray = [unacceptableLetter, writeName, writeSurname, writeLastName, requiredValue];
  const regexp = /[^а-яА-ЯёЁ]+$/g;

  const onInputValue = (input) => {
    input.addEventListener('input', () => {
      input.style.borderColor = '#B0B0B0';
      for (const item of validateArray) {
        item.textContent = '';
      }
    });

    input.oncut =
      input.oncopy =
      input.onpaste =
        () => {
          input.style.borderColor = '#B0B0B0';
          for (const item of validateArray) {
            item.textContent = '';
          }
        };

    input.onchange = () => {
      input.style.borderColor = '#B0B0B0';

      if (userSurname.value && userName.value && userLastName.value) {
        for (const item of validateArray) {
          item.textContent = '';
        }
      }
    };
  };

  onInputValue(userName);
  onInputValue(userSurname);
  onInputValue(userLastName);

  //проверка полей на заполненность
  const checkRequiredName = (input, message, name) => {
    if (!input.value) {
      input.style.borderColor = '#F06A4D';
      message.textContent = `Введите ${name} клиента!`;
      return false;
    } else {
      message.textContent = '';
    }

    return true;
  };

  //проверка на заполненный контент
  const checkByRegexp = (input, regexp) => {
    if (regexp.test(input.value)) {
      input.style.borderColor = '#F06A4D';
      unacceptableLetter.textContent = 'Недопустимые символы!';
      return false;
    }

    return true;
  };

  if (!checkRequiredName(userSurname, writeSurname, 'Фамилию')) {
    return false;
  }
  if (!checkRequiredName(userName, writeName, 'Имя')) {
    return false;
  }
  if (!checkRequiredName(userLastName, writeLastName, 'Отчество')) {
    return false;
  }
  if (!checkByRegexp(userName, regexp)) {
    return false;
  }
  if (!checkByRegexp(userSurname, regexp)) {
    return false;
  }
  if (!checkByRegexp(userLastName, regexp)) {
    return false;
  }

  return true;
};
