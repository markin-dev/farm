import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8';

const STORAGE_KEY = 'farm';
const AUTOSAVE_DELAY_MS = 10000;
const SECRET_KEY = process.env.VUE_APP_SECRET_KEY;

const save = (store) => {
  const stringifiedState = JSON.stringify(store.state);
  const encryptedString = AES.encrypt(stringifiedState, SECRET_KEY).toString();

  localStorage.setItem(STORAGE_KEY, encryptedString);
  store.commit('setSaveStatus', true);

  setTimeout(() => {
    store.commit('setSaveStatus', false);
  }, 1000);
};

const load = (store) => {
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

const autosavePlugin = (store) => {
  load(store);

  setInterval(() => {
    console.log(SECRET_KEY);

    save(store);
  }, AUTOSAVE_DELAY_MS);
};

export default autosavePlugin;
