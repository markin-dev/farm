import { createApp } from 'vue';
import { createStore } from 'vuex';
import formatMoney from '@/utils/formatMoney';
import autosavePlugin from '@/autoSavePlugin';
import gameLoopPlugin from '@/gameLoopPlugin';
import App from './App.vue';
import '@/scss/normalize.scss';

const store = createStore({
  state() {
    return {
      money: 0,
      totalMoney: 0,
      incomePerClick: 1,
      autoIncome: 0,
      isSaving: false,
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

      cropItem.price = Math.round(cropItem.price * 1.4);
    },

    increaseAnimalPrice(state, id) {
      const animalItem = state.animals.find((item) => item.id === id);

      animalItem.price = Math.round(animalItem.price * 1.5);
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

    addAutoIncomeMoney({ commit, state }, payload) {
      commit('addMoney', state.autoIncome * payload);
    },
  },

  plugins: [
    autosavePlugin,
    gameLoopPlugin,
  ],
});

const app = createApp(App);

app.use(store);
app.config.globalProperties.$formatMoney = formatMoney;
app.mount('#app');
