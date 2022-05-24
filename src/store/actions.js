import {
  getStore,
  addMoney,
  addTotalMoney,
  subtractMoney,
  addAnimals,
  addAutoIncome,
  increaseAnimalPrice,
  addCrops,
  addIncomePerClick,
  increaseCropPrice,
} from '@/store';

const store = getStore.value;

function harvest() {
  addMoney(store.incomePerClick);
  addTotalMoney(store.incomePerClick);
}

function addAutoIncomeMoney(multiplier) {
  addMoney(store.autoIncome * multiplier);
  store.eventBus.emit('added-auto-income', store.autoIncome * multiplier);
}

function buyAnimal(payload) {
  const animalItem = store.animals.find((item) => item.id === payload.id);
  subtractMoney(animalItem.price);
  addAnimals(payload);
  addAutoIncome(animalItem.income * payload.amount);
  increaseAnimalPrice(payload.id);
}

function buyCrop(payload) {
  const cropItem = store.crops.find((item) => item.id === payload.id);
  subtractMoney(cropItem.price);
  addCrops(payload);
  addIncomePerClick(cropItem.income * payload.amount);
  increaseCropPrice(payload.id);
}

export {
  harvest,
  addAutoIncomeMoney,
  buyAnimal,
  buyCrop,
};
