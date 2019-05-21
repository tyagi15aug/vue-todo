import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import store from "./store";
import Vuetify from "vuetify";
import VueChartkick from "vue-chartkick";
import Chart from "chart.js";
import "../node_modules/vuetify/dist/vuetify.min.css";

Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(VueChartkick, { adapter: Chart });

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
