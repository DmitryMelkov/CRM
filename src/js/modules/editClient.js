import { sendClientData } from '../clientsApi.js';
import { createContactItem } from '../createContact.js';
import { createClientsForm } from '../createModalForm.js';
import { deleteClientModal } from './createDeleteModal.js';

export const editClientModal = (data) => {
  const editModal = document.createElement('div');
  const editModalContent = document.createElement('div');
  const createForm = createClientsForm();
  const titleId = document.createElement('span');

  titleId.classList.add('modal__id');
  editModal.classList.add('modal-edit', 'site-modal', 'modal-active');
  editModalContent.classList.add('edit-modal__content', 'site-modal__content', 'modal-active');

  titleId.textContent = 'ID: ' + data.id.substr(0, 6);
  createForm.modalTitle.textContent = 'Изменить данные';
  createForm.cancelBtn.textContent = 'Удалить клиента';

  //удаление с сервера и с дом дерева
  createForm.cancelBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const deleteModal = deleteClientModal();
    document.body.append(deleteModal.deleteModal);

    import('../clientsApi.js').then(({ deleteClientItem }) => {
      deleteModal.deleteModalDelete.addEventListener('click', () => {
        deleteClientItem(data.id);
        document.getElementById(data.id).remove();
      });
    });
  });

  createForm.modalClose.addEventListener('click', () => {
    editModal.remove();
  });

  //отображение текущих данных
  createForm.inputName.value = data.name;
  createForm.inputSurname.value = data.surname;
  createForm.inputLastName.value = data.lastName;

  for (const contact of data.contacts) {
    const createContact = createContactItem();

    createContact.contactName.textContent = contact.type;
    createContact.contactInput.value = contact.value;

    createForm.contactsBlock.prepend(createContact.contact);
    createForm.contactsBlock.style.backgroundColor = '$colorGrey';
  }

  if (data.contacts.length == 10) {
    createForm.addContactBtn.classList.remove('modal__btn-contact--active');
  }


  //изменение данных клиента
  createForm.form.addEventListener('submit', (e) => {
    e.preventDefault();

    const contactTypes = document.querySelectorAll('.contact__name');
    const contactValues = document.querySelectorAll('.contact__input');
    let contacts = [];
    let client = {};

    for (let i = 0; i < contactTypes.length; i++) {
      contacts.push({
        type: contactTypes[i].innerHTML,
        value: contactValues[i].value,
      });
    }

    client.name = createForm.inputName.value;
    client.surname = createForm.inputSurname.value;
    client.lastName = createForm.inputLastName.value;
    client.contacts = contacts;

    sendClientData(client, 'PATCH', data.id);
  });

  createForm.modalTitle.append(titleId);
  editModalContent.append(createForm.modalClose, createForm.modalTitle, createForm.form);
  editModal.append(editModalContent);

  //при клике на пустое поле закрыть
  document.addEventListener('click', (e) => {
    if (e.target == editModal) {
      editModal.remove();
    }
  });

  return {
    editModal,
    editModalContent,
  };
};
