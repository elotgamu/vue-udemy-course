import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    doubleCounter: state => {
      return state.counter * 2;
    },
    stringCounter: state => {
      return state.counter + " Clicks!!!";
    }
  },
  mutations: {
    increment: (state, payload) => {
      if (payload) {
        state.counter += payload;
      } else {
        state.counter++;
      }
    },
    decrement: (state, payload) => {
      if (payload) {
        state.counter -= payload;
      }
    }
  },
  actions: {
    increment: (context, payload) => {
      context.commit("increment", payload);
    },
    decrement: (context, payload) => {
      context.commit("decrement", payload);
    },
    asyncIncrement: context => {
      setTimeout(() => {
        context.commit("increment");
      }, 1000);
    },
    asyncDecrement: context => {
      setTimeout(() => {
        context.commit("decrement");
      }, 1000);
    }
  }
});
