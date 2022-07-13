// import Vue from 'vue'
// import App from './App.vue'
// import './assets/index.css';

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
import { createApp } from "vue";
import App from "./App.vue";
import './styles/app.css'; // Here
import store from './store'
import router from './router'
import vClickOutside from "click-outside-vue3"

const app = createApp(App);
app.use(router)
app.mount('#app')