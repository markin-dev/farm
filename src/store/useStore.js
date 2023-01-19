import { computed } from 'vue';
import store from './store';

function useStore() {
  function initialLoadData(loadedStore) {
    const excludedFields = ['eventBus'];

    Object.keys(loadedStore).forEach((key) => {
      if (excludedFields.indexOf(key) === -1) {
        store.value[key] = loadedStore[key];
      }
    });
  }

  function addMoney(value) {
    store.value.money += value;
    store.value.totalMoney += value;
  }

  function subtractMoney(value) {
    store.value.money -= value;
  }

  function addAutoIncome(value) {
    store.value.autoIncome += value;
  }

  function addIncomePerClick(value) {
    store.value.incomePerClick += value;
  }

  function addAnimals(payload) {
    const animalItem = store.value.animals.find((item) => item.id === payload.id);

    animalItem.amount += payload.amount;
  }

  function addCrops(payload) {
    const cropItem = store.value.crops.find((item) => item.id === payload.id);

    cropItem.amount += payload.amount;
  }

  function increaseAnimalPrice(id) {
    const animalItem = store.value.animals.find((item) => item.id === id);

    animalItem.price = Math.round(animalItem.price * 1.5);
  }

  function increaseCropPrice(id) {
    const cropItem = store.value.crops.find((item) => item.id === id);

    cropItem.price = Math.round(cropItem.price * 1.4);
  }

  function setGameCompletionFlag(value) {
    store.value.isGameCompleted = value;
  }

  return {
    store: computed(() => store.value),
    money: computed(() => store.value.money),
    totalMoney: computed(() => store.value.totalMoney),
    incomePerClick: computed(() => store.value.incomePerClick),
    autoIncome: computed(() => store.value.autoIncome),
    eventBus: computed(() => store.value.eventBus),
    animals: computed(() => store.value.animals),
    crops: computed(() => store.value.crops),
    isGameCompleted: computed(() => store.value.isGameCompleted),
    initialLoadData,
    addMoney,
    subtractMoney,
    addAutoIncome,
    addIncomePerClick,
    addAnimals,
    addCrops,
    increaseAnimalPrice,
    increaseCropPrice,
    setGameCompletionFlag,
  };
}

export default useStore;
