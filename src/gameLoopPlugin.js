import { save } from '@/saveLoad';

const TICK = 500;
let mainGameInterval;

const addAutoIncome = (store, multiplier = 1) => {
  if (!store.state.autoIncome) {
    return;
  }

  store.dispatch('addAutoIncomeMoney', multiplier);
};

const makeNumberOfGameTicks = (number, store) => {
  addAutoIncome(store, number);
};

const startActiveGameLoop = (store) => {
  clearInterval(mainGameInterval);

  mainGameInterval = setInterval(() => {
    makeNumberOfGameTicks(1, store);
  }, TICK);
};

const startIdleGameLoop = (store) => {
  let lastTickMs = Date.now();

  clearInterval(mainGameInterval);

  mainGameInterval = setInterval(() => {
    const nowMs = Date.now();
    const numberOfGameTicks = (nowMs - lastTickMs) / TICK;

    makeNumberOfGameTicks(Math.floor(numberOfGameTicks), store);
    save(store);
    lastTickMs = nowMs;
  }, 5000);
};

const gameLoopPlugin = (store) => {
  startActiveGameLoop(store);

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      startIdleGameLoop(store);
    } else {
      save(store);
      startActiveGameLoop(store);
    }
  });
};

export default gameLoopPlugin;
