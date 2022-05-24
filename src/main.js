import { createApp } from 'vue';
import formatMoney from '@/utils/formatMoney';
import App from './App.vue';
import '@/scss/normalize.scss';
import startGameLoop from '@/store/gameLoop';

const app = createApp(App);

app.config.globalProperties.$formatMoney = formatMoney;
app.mount('#app');

startGameLoop();
