const state = {
  counter: 0
};

const getters = {
  doubleCounter: state => {
    return state.counter * 2;
  },
  stringCounter: state => {
    return state.counter + " Clicks!!!";
  }
};

const mutations = {
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
    } else {
      state.counter--;
    }
  }
};

const actions = {
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
};

export default {
  state,
  getters,
  actions,
  mutations
};
