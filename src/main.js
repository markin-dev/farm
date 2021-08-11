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
          name: 'Wheat',
          iconName: 'wheat',
          basePrice: 100,
          price: 100,
          income: 0.01,
          amount: 0,
        },
        {
          name: 'Potato',
          iconName: 'potato',
          basePrice: 200,
          price: 200,
          income: 0.02,
          amount: 0,
        },
        {
          name: 'Carrot',
          iconName: 'carrot',
          basePrice: 400,
          price: 400,
          income: 0.05,
          amount: 0,
        },
        {
          name: 'Corn',
          iconName: 'corn',
          basePrice: 1000,
          price: 1000,
          income: 1.5,
          amount: 0,
        },
        {
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

    incrementCropsAmount(state, cropName) {
      const cropItem = state.crops.find((item) => item.name === cropName);

      cropItem.amount += 1;
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

    buyCrop({ commit, state }, cropName) {
      const cropItem = state.crops.find((item) => item.name === cropName);
      commit('incrementCropsAmount', cropName);
      commit('addIncomePerClick', cropItem.income);
    },
  },
});

const app = createApp(App);

app.use(store);
app.config.globalProperties.$formatMoney = formatMoney;
app.mount('#app');
