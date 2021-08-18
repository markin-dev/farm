import { createApp } from 'vue';
import { createStore } from 'vuex';
import formatMoney from '@/utils/formatMoney';
import App from './App.vue';
import '@/scss/normalize.scss';

const store = createStore({
  state() {
    return {
      money: 0,
      totalMoney: 0,
      incomePerClick: 10,
      autoIncome: 1,
      crops: [
        {
          id: 0,
          name: 'Wheat',
          iconName: 'wheat',
          basePrice: 1000,
          price: 1000,
          income: 10,
          amount: 0,
        },
        {
          id: 1,
          name: 'Potato',
          iconName: 'potato',
          basePrice: 10000,
          price: 10000,
          income: 50,
          amount: 0,
        },
        {
          id: 2,
          name: 'Carrot',
          iconName: 'carrot',
          basePrice: 50000,
          price: 50000,
          income: 125,
          amount: 0,
        },
        {
          id: 3,
          name: 'Corn',
          iconName: 'corn',
          basePrice: 250000,
          price: 250000,
          income: 312,
          amount: 0,
        },
        {
          id: 4,
          name: 'Strawberry',
          iconName: 'strawberry',
          basePrice: 1250000,
          price: 1250000,
          income: 781,
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
  },

  mutations: {
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

    addIncomePerClick(state, value) {
      state.incomePerClick += value;
    },

    increaseCropPrice(state, id) {
      const cropItem = state.crops.find((item) => item.id === id);

      cropItem.price = Math.round(cropItem.price * 1.1);
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

    addAutoIncome({ commit, state }) {
      commit('addMoney', state.autoIncome);
    },
  },
});

const app = createApp(App);

app.use(store);
app.config.globalProperties.$formatMoney = formatMoney;
app.mount('#app');
