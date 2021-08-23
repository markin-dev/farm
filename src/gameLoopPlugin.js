const TICK = 100;

const everyNumberOfTicks = (cb, everyTick) => {
  const ms = Date.now();
  const remainderIfDivision = ms % (TICK * everyTick);
  const floor = Math.floor(remainderIfDivision / TICK);

  if (!floor) {
    cb();
  }
};

const addAutoIncome = (store) => {
  if (!store.state.autoIncome) {
    return;
  }

  everyNumberOfTicks(() => {
    store.dispatch('addAutoIncomeMoney');
  }, 5);
};

const gameLoopPlugin = (store) => {
  setInterval(() => {
    addAutoIncome(store);
  }, TICK);
};

export default gameLoopPlugin;
