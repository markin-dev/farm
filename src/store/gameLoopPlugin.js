import { save } from '@/newStore/saveLoad';

const DEFAULT_GAME_TICK_MS = 1000;
const IDLE_GAME_LOOP_INTERVAL_MS = 5000;
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
  }, DEFAULT_GAME_TICK_MS);
};

const startIdleGameLoop = (store) => {
  let lastTickMs = Date.now();

  clearInterval(mainGameInterval);

  mainGameInterval = setInterval(() => {
    const nowMs = Date.now();
    const numberOfGameTicks = (nowMs - lastTickMs) / DEFAULT_GAME_TICK_MS;

    makeNumberOfGameTicks(Math.floor(numberOfGameTicks), store);

    save(store);

    lastTickMs = nowMs;
  }, IDLE_GAME_LOOP_INTERVAL_MS);
};

const gameLoopPlugin = (store) => {
  // startActiveGameLoop(store);

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
