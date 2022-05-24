import { createApp } from 'vue';
import formatMoney from '@/utils/formatMoney';
import App from './App.vue';
import '@/scss/normalize.scss';
import startGameLoop from '@/newStore/gameLoop';

const app = createApp(App);

app.config.globalProperties.$formatMoney = formatMoney;
app.mount('#app');

startGameLoop();
