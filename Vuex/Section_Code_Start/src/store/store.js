import Vue from "vue";
import Vuex from "vuex";

//General Actions
import { updateValue } from "./actions";
//Import state modules
import counter from "./modules/counter";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0,
    value: 0
  },
  getters: {
    value: state => state.value
  },
  mutations: {
    updateValue: (state, payload) => (state.value = payload)
  },
  actions: {
    updateValue
  },
  modules: {
    counter
  }
});
