import { createApp } from 'vue'
import App from './App.vue'

import "./assets/style.css"
import router from "./route/router"
const wholeApp = createApp(App);

wholeApp.use(router);
wholeApp.mount('#app');

