import { createApp } from 'vue';
import store from '@/store';
import formatMoney from '@/utils/formatMoney';
import App from './App.vue';
import '@/scss/normalize.scss';

const app = createApp(App);

app.use(store);
app.config.globalProperties.$formatMoney = formatMoney;
app.mount('#app');
