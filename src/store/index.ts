import Vue from "vue";
import Vuex from "vuex";
import todos from "./todos";

Vue.use(Vuex);
Vue.config.devtools = true;
export default new Vuex.Store({
  modules: {
    todos
  }
});
