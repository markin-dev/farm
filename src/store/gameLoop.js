import {
  save,
  load,
  startAutosave,
  stopAutosave,
} from '@/store/saveLoad';
import useStore from '@/store/useStore';
import { addAutoIncomeMoney } from '@/store/actions';

const { autoIncome, isGameCompleted } = useStore();
const DEFAULT_GAME_TICK_MS = 1000;
const IDLE_GAME_LOOP_INTERVAL_MS = 5000;
let mainGameInterval;

const addAutoIncome = (multiplier = 1) => {
  if (!autoIncome.value) {
    return;
  }

  addAutoIncomeMoney(multiplier);
};

const makeNumberOfGameTicks = (number) => {
  addAutoIncome(number);
};

const startActiveGameLoop = () => {
  clearInterval(mainGameInterval);

  mainGameInterval = setInterval(() => {
    makeNumberOfGameTicks(1);
  }, DEFAULT_GAME_TICK_MS);
};

const startIdleGameLoop = () => {
  let lastTickMs = Date.now();

  clearInterval(mainGameInterval);

  mainGameInterval = setInterval(() => {
    const nowMs = Date.now();
    const numberOfGameTicks = (nowMs - lastTickMs) / DEFAULT_GAME_TICK_MS;

    makeNumberOfGameTicks(Math.floor(numberOfGameTicks));
    save();
    lastTickMs = nowMs;
  }, IDLE_GAME_LOOP_INTERVAL_MS);
};

function visibilityChangeHandler() {
  if (document.hidden) {
    startIdleGameLoop();
  } else {
    save();
    startActiveGameLoop();
  }
}

export const startGameLoop = () => {
  load();

  if (isGameCompleted.value) {
    return;
  }

  startAutosave();
  startActiveGameLoop();

  document.addEventListener('visibilitychange', visibilityChangeHandler);
};

export const stopGameLoop = () => {
  stopAutosave();
  document.removeEventListener('visibilitychange', visibilityChangeHandler);
  clearInterval(mainGameInterval);
};
