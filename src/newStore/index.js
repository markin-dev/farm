import { ref, computed } from 'vue';
import mitt from 'mitt';

const store = ref({
  money: 0,
  totalMoney: 0,
  incomePerClick: 1,
  autoIncome: 1000,
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

function addTotalMoney(value) {
  store.value.totalMoney += value;
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

function addAutoIncomeMoney(multiplier) {
  addMoney(store.value.autoIncome * multiplier);
  store.value.eventBus.emit('added-auto-income', store.value.autoIncome * multiplier);
}

const getStore = computed(() => store.value);
const getMoney = computed(() => store.value.money);
const getIncomePerClick = computed(() => store.value.incomePerClick);
const getAutoIncome = computed(() => store.value.autoIncome);
const getEventBus = computed(() => store.value.eventBus);

export {
  getStore,
  harvest,
  addAutoIncomeMoney,
  initialLoadData,
  getMoney,
  getIncomePerClick,
  getAutoIncome,
  getEventBus,
};
