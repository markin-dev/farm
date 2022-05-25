import useStore from '@/store/useStore';

const {
  incomePerClick,
  animals,
  crops,
  autoIncome,
  eventBus,
  addMoney,
  subtractMoney,
  addAnimals,
  addAutoIncome,
  increaseAnimalPrice,
  addCrops,
  addIncomePerClick,
  increaseCropPrice,
} = useStore();

function harvest() {
  addMoney(incomePerClick.value);
}

function addAutoIncomeMoney(multiplier) {
  addMoney(autoIncome.value * multiplier);
  eventBus.value.emit('added-auto-income', autoIncome.value * multiplier);
}

function buyAnimal(payload) {
  const animalItem = animals.value.find((item) => item.id === payload.id);
  subtractMoney(animalItem.price);
  addAnimals(payload);
  addAutoIncome(animalItem.income * payload.amount);
  increaseAnimalPrice(payload.id);
}

function buyCrop(payload) {
  const cropItem = crops.value.find((item) => item.id === payload.id);
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
