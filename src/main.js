import { createApp } from 'vue';
import { createStore } from 'vuex';
import formatMoney from '@/utils/formatMoney';
import App from './App.vue';
import '@/scss/normalize.scss';

const autosavePlugin = (store) => {
  const AUTOSAVE_DELAY_MS = 10000;
  const loadedData = localStorage.getItem('farm');
  const parsedData = JSON.parse(loadedData);

  if (loadedData) {
    store.commit('initialLoadData', parsedData);
  }

  setInterval(() => {
    const stringifiedState = JSON.stringify(store.state);

    store.commit('setSaveStatus', true);

    setTimeout(() => {
      store.commit('setSaveStatus', false);
    }, 1000);

    localStorage.setItem('farm', stringifiedState);
  }, AUTOSAVE_DELAY_MS);
};

const store = createStore({
  state() {
    return {
      money: 0,
      totalMoney: 0,
      incomePerClick: 10,
      autoIncome: 0,
      isSaving: false,
      crops: [
        {
          id: 0,
          name: 'Wheat',
          iconName: 'wheat',
          price: 1000,
          income: 10,
          amount: 0,
        },
        {
          id: 1,
          name: 'Potato',
          iconName: 'potato',
          price: 10000,
          income: 50,
          amount: 0,
        },
        {
          id: 2,
          name: 'Carrot',
          iconName: 'carrot',
          price: 50000,
          income: 125,
          amount: 0,
        },
        {
          id: 3,
          name: 'Corn',
          iconName: 'corn',
          price: 250000,
          income: 312,
          amount: 0,
        },
        {
          id: 4,
          name: 'Strawberry',
          iconName: 'strawberry',
          price: 1250000,
          income: 781,
          amount: 0,
        },
      ],
      animals: [
        {
          id: 0,
          name: 'Chicken',
          iconName: 'chicken',
          price: 10000,
          income: 50,
          amount: 0,
        },
        {
          id: 1,
          name: 'Rabbit',
          iconName: 'rabbit',
          price: 50000,
          income: 250,
          amount: 0,
        },
        {
          id: 2,
          name: 'Pig',
          iconName: 'pig',
          price: 250000,
          income: 1250,
          amount: 0,
        },
        {
          id: 3,
          name: 'Goat',
          iconName: 'goat',
          price: 1250000,
          income: 6250,
          amount: 0,
        },
        {
          id: 4,
          name: 'Cow',
          iconName: 'cow',
          price: 6250000,
          income: 31250,
          amount: 0,
        },
      ],
    };
  },

  getters: {
    isCropDisabled: (state) => (id) => {
      const cropItem = state.crops.find((item) => item.id === id);

      return cropItem.price > state.money;
    },

    isAnimalDisabled: (state) => (id) => {
      const animalItem = state.animals.find((item) => item.id === id);

      return animalItem.price > state.money;
    },
  },

  mutations: {
    initialLoadData(state, payload) {
      this.replaceState(Object.assign(state, payload));
    },

    setSaveStatus(state, payload) {
      state.isSaving = payload;
    },

    addMoney(state, value) {
      state.money += value;
    },

    subtractMoney(state, value) {
      state.money -= value;
    },

    addTotalMoney(state, value) {
      state.totalMoney += value;
    },

    addCrops(state, payload) {
      const cropItem = state.crops.find((item) => item.id === payload.id);

      cropItem.amount += payload.amount;
    },

    addAnimals(state, payload) {
      const animalItem = state.animals.find((item) => item.id === payload.id);

      animalItem.amount += payload.amount;
    },

    addIncomePerClick(state, value) {
      state.incomePerClick += value;
    },

    addAutoIncome(state, value) {
      state.autoIncome += value;
    },

    increaseCropPrice(state, id) {
      const cropItem = state.crops.find((item) => item.id === id);

      cropItem.price = Math.round(cropItem.price * 1.1);
    },

    increaseAnimalPrice(state, id) {
      const animalItem = state.animals.find((item) => item.id === id);

      animalItem.price = Math.round(animalItem.price * 1.15);
    },
  },

  actions: {
    harvest({ commit, state }) {
      commit('addMoney', state.incomePerClick);
      commit('addTotalMoney', state.incomePerClick);
    },

    buyCrop({ commit, state }, payload) {
      const cropItem = state.crops.find((item) => item.id === payload.id);
      commit('subtractMoney', cropItem.price);
      commit('addCrops', payload);
      commit('addIncomePerClick', cropItem.income * payload.amount);
      commit('increaseCropPrice', payload.id);
    },

    buyAnimal({ commit, state }, payload) {
      const animalItem = state.animals.find((item) => item.id === payload.id);
      commit('subtractMoney', animalItem.price);
      commit('addAnimals', payload);
      commit('addAutoIncome', animalItem.income * payload.amount);
      commit('increaseAnimalPrice', payload.id);
    },

    addAutoIncomeMoney({ commit, state }) {
      commit('addMoney', state.autoIncome);
    },
  },

  plugins: [autosavePlugin],
});

const app = createApp(App);

app.use(store);
app.config.globalProperties.$formatMoney = formatMoney;
app.mount('#app');
