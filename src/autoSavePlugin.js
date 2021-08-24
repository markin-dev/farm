import { save, load } from '@/saveLoad';

const AUTOSAVE_DELAY_MS = 10000;

const autosavePlugin = (store) => {
  load(store);

  setInterval(() => {
    save(store);
  }, AUTOSAVE_DELAY_MS);
};

export default autosavePlugin;
