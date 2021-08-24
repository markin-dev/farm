import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8';

const STORAGE_KEY = 'farm';
const SECRET_KEY = process.env.VUE_APP_SECRET_KEY;

export const save = (store) => {
  const stringifiedState = JSON.stringify(store.state);
  const encryptedString = AES.encrypt(stringifiedState, SECRET_KEY).toString();

  localStorage.setItem(STORAGE_KEY, encryptedString);
  store.commit('setSaveStatus', true);

  setTimeout(() => {
    store.commit('setSaveStatus', false);
  }, 1000);
};

export const load = (store) => {
  const loadedData = localStorage.getItem(STORAGE_KEY);

  if (!loadedData) {
    return;
  }

  try {
    const decryptedString = AES.decrypt(loadedData, SECRET_KEY).toString(Utf8);
    const parsedData = JSON.parse(decryptedString);

    store.commit('initialLoadData', parsedData);
  } catch (e) {
    // eslint-disable-next-line
    console.warn('Save broken, lets start from beginnig!');
    localStorage.removeItem(STORAGE_KEY);
  }
};
