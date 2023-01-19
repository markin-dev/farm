import { ref } from 'vue';
import mitt from 'mitt';

const store = ref({
  money: 0,
  totalMoney: 0,
  incomePerClick: 1,
  autoIncome: 0,
  eventBus: mitt(),
  isGameCompleted: false,
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
      income: 100,
      amount: 0,
    },
    {
      id: 1,
      name: 'Rabbit',
      iconName: 'rabbit',
      price: 9000,
      income: 300,
      amount: 0,
    },
    {
      id: 2,
      name: 'Pig',
      iconName: 'pig',
      price: 125000,
      income: 500,
      amount: 0,
    },
    {
      id: 3,
      name: 'Goat',
      iconName: 'goat',
      price: 620000,
      income: 700,
      amount: 0,
    },
    {
      id: 4,
      name: 'Cow',
      iconName: 'cow',
      price: 5000000,
      income: 1000,
      amount: 0,
    },
  ],
});

export default store;
