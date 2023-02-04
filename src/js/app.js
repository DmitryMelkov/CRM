import * as flsFunctions from './modules/functionsWebP.js';
import { createClientsHeader } from './createHeader.js';
import { createClientsSection } from './createClientsSection.js';
import { getClients } from './clientsApi.js';
import { createClientItem } from './createClientItem.js';

flsFunctions.isWeb();

const createApp = async () => {
  const clients = await getClients();
  const header = createClientsHeader();
  const clientSection = createClientsSection();
  document.body.append(header, clientSection.main);

  //положить клиента с сервера  в таблицу
  window.onload = () => {
    const preloader = document.querySelector('.preloader');
    preloader.remove();
    for (const client of clients) {
      document.querySelector('.clients__tbody').append(createClientItem(client));
    }
  };
};

createApp();

