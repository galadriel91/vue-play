import { createApp } from 'vue';
import { router } from '@/routes/index';
import { createPinia } from 'pinia';
import App from './App.vue';
const pinia = createPinia();

createApp(App).use(pinia).use(router).mount('#app');
