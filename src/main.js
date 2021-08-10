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
    };
  },
  mutations: {
    addMoney(state, value) {
      state.money += value;
    },

    addTotalMoney(state, value) {
      state.totalMoney += value;
    },
  },
  actions: {
    harvest({ commit }) {
      commit('addMoney', 0.5);
      commit('addTotalMoney', 0.5);
    },
  },
});

const app = createApp(App);

app.use(store);
app.config.globalProperties.$formatMoney = formatMoney;
app.mount('#app');
