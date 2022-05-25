import { ref, computed } from 'vue';
import mitt from 'mitt';

const store = ref({
  money: 10000,
  totalMoney: 10000,
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

const getStore = computed(() => store.value);
const getMoney = computed(() => store.value.money);
const getTotalMoney = computed(() => store.value.totalMoney);
const getIncomePerClick = computed(() => store.value.incomePerClick);
const getAutoIncome = computed(() => store.value.autoIncome);
const getEventBus = computed(() => store.value.eventBus);
const getAnimals = computed(() => store.value.animals);
const getCrops = computed(() => store.value.crops);

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

export {
  getStore,
  getMoney,
  getTotalMoney,
  getIncomePerClick,
  getAutoIncome,
  getEventBus,
  getAnimals,
  getCrops,
  initialLoadData,
  addMoney,
  subtractMoney,
  addAutoIncome,
  addIncomePerClick,
  addAnimals,
  addCrops,
  increaseAnimalPrice,
  increaseCropPrice,
};