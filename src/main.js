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
      incomePerClick: 0.01,
      crops: [
        {
          id: 0,
          name: 'Wheat',
          iconName: 'wheat',
          basePrice: 100,
          price: 100,
          income: 0.01,
          amount: 0,
        },
        {
          id: 1,
          name: 'Potato',
          iconName: 'potato',
          basePrice: 200,
          price: 200,
          income: 0.02,
          amount: 0,
        },
        {
          id: 2,
          name: 'Carrot',
          iconName: 'carrot',
          basePrice: 400,
          price: 400,
          income: 0.05,
          amount: 0,
        },
        {
          id: 3,
          name: 'Corn',
          iconName: 'corn',
          basePrice: 1000,
          price: 1000,
          income: 1.5,
          amount: 0,
        },
        {
          id: 4,
          name: 'Strawberry',
          iconName: 'strawberry',
          basePrice: 3000,
          price: 3000,
          income: 4,
          amount: 0,
        },
      ],
    };
  },

  mutations: {
    addMoney(state, value) {
      state.money += value;
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
  },

  actions: {
    harvest({ commit, state }) {
      commit('addMoney', state.incomePerClick);
      commit('addTotalMoney', state.incomePerClick);
    },

    buyCrop({ commit, state }, payload) {
      const cropItem = state.crops.find((item) => item.id === payload.id);
      commit('addCrops', payload);
      commit('addIncomePerClick', cropItem.income * payload.amount);
    },
  },
});

const app = createApp(App);

app.use(store);
app.config.globalProperties.$formatMoney = formatMoney;
app.mount('#app');
