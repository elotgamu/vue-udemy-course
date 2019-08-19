import Vue from "vue";
import Vuex from "vuex";

import authInstance from "./axios-auth";
import globalAxios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tokenId: null,
    userId: null,
    userEmail: null
  },
  mutations: {
    AUTH_USER(state, payload) {
      state.tokenId = payload.tokenId;
      state.userId = payload.userId;
      state.userEmail = payload.email;
    },
    LOGOUT_USER(state) {
      state.tokenId = null;
      state.userId = null;
      state.userEmail = null;
    }
  },
  actions: {
    sign_up({ commit, dispatch }, payload) {
      authInstance
        .post("/accounts:signUp?key=AIzaSyBobAf9kfBDYVobE7zlkSYQfwiuA1gE75I", {
          email: payload.email,
          password: payload.password,
          returnSecureToken: true
        })
        .then(result => {
          const data = result.data;
          commit("AUTH_USER", {
            tokenId: data.idToken,
            userId: data.localId,
            email: data.email
          });
          dispatch("store_user", payload);
        })
        .catch(error => console.log(error));
    },
    login({ commit }, payload) {
      authInstance
        .post(
          "/accounts:signInWithPassword?key=AIzaSyBobAf9kfBDYVobE7zlkSYQfwiuA1gE75I",
          {
            email: payload.email,
            password: payload.password,
            returnSecureToken: true
          }
        )
        .then(result => {
          const data = result.data;
          commit("AUTH_USER", {
            tokenId: data.idToken,
            userId: data.localId,
            email: data.email
          });
        })
        .catch(err => {});
    },
    logout({ commit }) {
      commit("LOGOUT_USER");
    },
    store_user({ commit, state }, payload) {
      if (!state.tokenId) {
        return;
      }
      globalAxios.post(`/users.json?auth=${state.tokenId}`, {
        email: payload.email,
        age: payload.age,
        country: payload.country,
        hobbies: payload.hobbies,
        terms: payload.terms
      });
    },
    fetchUsers({ commit, state }) {
      if (!state.tokenId) {
        return;
      }
      globalAxios
        .get(`/users.json?auth=${state.tokenId}`)
        .then(res => {
          console.log(res);
          const data = res.data;
          const users = [];
          for (let key in data) {
            const user = data[key];
            user.id = key;
            users.push(user);
          }
          console.log(users);
          // this.email = users[0].email;
        })
        .catch(error => console.log(error));
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.tokenId !== null;
    }
  }
});
