import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8';
import getSecretKey from '@/utils/getSecretKey';

import useStore from '@/store/useStore';

const { store, eventBus, initialLoadData } = useStore();
const STORAGE_KEY = 'farmSave';
const SECRET_KEY = getSecretKey();
const AUTOSAVE_DELAY_MS = 10000;

export const save = () => {
  const stringifiedState = JSON.stringify(store.value);
  const encryptedString = AES.encrypt(stringifiedState, SECRET_KEY).toString();

  localStorage.setItem(STORAGE_KEY, encryptedString);
  eventBus.value.emit('game-saved');
};

export const load = () => {
  const loadedData = localStorage.getItem(STORAGE_KEY);

  if (!loadedData) {
    return;
  }

  try {
    const decryptedString = AES.decrypt(loadedData, SECRET_KEY).toString(Utf8);
    const parsedData = JSON.parse(decryptedString);

    initialLoadData(parsedData);
  } catch (e) {
    console.warn('Save broken, lets start from beginnig!'); // eslint-disable-line
    localStorage.removeItem(STORAGE_KEY);
  }
};

export const startAutosave = () => {
  setInterval(() => {
    save();
  }, AUTOSAVE_DELAY_MS);
};

export const clearSave = () => {
  localStorage.removeItem(STORAGE_KEY);
  window.location.reload();
};
