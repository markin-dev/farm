import { ref, computed } from 'vue';
import mitt from 'mitt';

const store = ref({
  money: 10000,
  totalMoney: 0,
  incomePerClick: 1,
  autoIncome: 0,
  eventBus: mitt(),
  crops: [
    {
      id: 0,
      name: 'Wheat',
      iconName: 'wheat',
      price: 100,
      income: 1,
      amount: 0,
    },
    {
      id: 1,
      name: 'Potato',
      iconName: 'potato',
      price: 900,
      income: 3,
      amount: 0,
    },
    {
      id: 2,
      name: 'Carrot',
      iconName: 'carrot',
      price: 12500,
      income: 5,
      amount: 0,
    },
    {
      id: 3,
      name: 'Corn',
      iconName: 'corn',
      price: 62000,
      income: 7,
      amount: 0,
    },
    {
      id: 4,
      name: 'Strawberry',
      iconName: 'strawberry',
      price: 500000,
      income: 10,
      amount: 0,
    },
  ],
  animals: [
    {
      id: 0,
      name: 'Chicken',
      iconName: 'chicken',
      price: 1000,
      income: 1,
      amount: 0,
    },
    {
      id: 1,
      name: 'Rabbit',
      iconName: 'rabbit',
      price: 9000,
      income: 3,
      amount: 0,
    },
    {
      id: 2,
      name: 'Pig',
      iconName: 'pig',
      price: 125000,
      income: 5,
      amount: 0,
    },
    {
      id: 3,
      name: 'Goat',
      iconName: 'goat',
      price: 620000,
      income: 7,
      amount: 0,
    },
    {
      id: 4,
      name: 'Cow',
      iconName: 'cow',
      price: 5000000,
      income: 10,
      amount: 0,
    },
  ],
});

function addMoney(value) {
  store.value.money += value;
}

function subtractMoney(value) {
  store.value.money -= value;
}

function addTotalMoney(value) {
  store.value.totalMoney += value;
}

function addAutoIncome(value) {
  store.value.autoIncome += value;
}

function addIncomePerClick(value) {
  store.value.incomePerClick += value;
}

function increaseAnimalPrice(id) {
  const animalItem = store.value.animals.find((item) => item.id === id);

  animalItem.price = Math.round(animalItem.price * 1.5);
}

function increaseCropPrice(id) {
  const cropItem = store.value.crops.find((item) => item.id === id);

  cropItem.price = Math.round(cropItem.price * 1.4);
}

function initialLoadData(loadedStore) {
  const excludedFields = ['eventBus'];

  Object.keys(loadedStore).forEach((key) => {
    if (excludedFields.indexOf(key) === -1) {
      store.value[key] = loadedStore[key];
    }
  });
}

function harvest() {
  addMoney(store.value.incomePerClick);
  addTotalMoney(store.value.incomePerClick);
}

function addAnimals(payload) {
  const animalItem = store.value.animals.find((item) => item.id === payload.id);

  animalItem.amount += payload.amount;
}

function addCrops(payload) {
  const cropItem = store.value.crops.find((item) => item.id === payload.id);

  cropItem.amount += payload.amount;
}

function addAutoIncomeMoney(multiplier) {
  addMoney(store.value.autoIncome * multiplier);
  store.value.eventBus.emit('added-auto-income', store.value.autoIncome * multiplier);
}

function buyAnimal(payload) {
  const animalItem = store.value.animals.find((item) => item.id === payload.id);
  subtractMoney(animalItem.price);
  addAnimals(payload);
  addAutoIncome(animalItem.income * payload.amount);
  increaseAnimalPrice(payload.id);
}

function buyCrop(payload) {
  const cropItem = store.value.crops.find((item) => item.id === payload.id);
  subtractMoney(cropItem.price);
  addCrops(payload);
  addIncomePerClick(cropItem.income * payload.amount);
  increaseCropPrice(payload.id);
}

const getStore = computed(() => store.value);
const getMoney = computed(() => store.value.money);
const getIncomePerClick = computed(() => store.value.incomePerClick);
const getAutoIncome = computed(() => store.value.autoIncome);
const getEventBus = computed(() => store.value.eventBus);
const getAnimals = computed(() => store.value.animals);
const getCrops = computed(() => store.value.crops);

export {
  getStore,
  harvest,
  addAutoIncomeMoney,
  initialLoadData,
  getMoney,
  getIncomePerClick,
  getAutoIncome,
  getEventBus,
  buyAnimal,
  getAnimals,
  buyCrop,
  getCrops,
};
