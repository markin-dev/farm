import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';
import '@/scss/normalize.scss';

const store = createStore({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state) {
      state.count += 1;
    },
  },
});

createApp(App)
  .use(store)
  .mount('#app');
