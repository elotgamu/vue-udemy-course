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
    setLogoutTimer({ commit }, expiration) {
      setTimeout(() => {
        commit("LOGOUT_USER");
      }, expiration * 1000);
    },
    tryAutoLogin({ commit }) {
      const tokenId = localStorage.getItem("userToken");
      const expirationDate = localStorage.getItem("tokenExpiresIn");
      const userEmail = localStorage.getItem("userEmail");
      const userId = localStorage.getItem("userId");

      if (!tokenId) {
        return;
      }
      if (expirationDate) {
        if (expirationDate <= new Date()) {
          return;
        }
        commit("AUTH_USER", {
          tokenId: tokenId,
          userId: userId,
          email: userEmail
        });
      }
    },
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
          const now = new Date();
          const tokenExpiration = new Date(
            now.getTime() + data.expiresIn * 1000
          );
          localStorage.setItem("userToken", data.idToken);
          localStorage.setItem("tokenExpiresIn", tokenExpiration);
          localStorage.setItem("userEmail", data.email);
          localStorage.setItem("userId", data.localId);
          dispatch("store_user", payload);
          dispatch("setLogoutTimer", data.expiresIn * 1000);
        })
        .catch(error => console.log(error));
    },
    login({ commit, dispatch }, payload) {
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

          const now = new Date();
          const tokenExpiration = new Date(
            now.getTime() + data.expiresIn * 1000
          );
          localStorage.setItem("userToken", data.idToken);
          localStorage.setItem("tokenExpiresIn", tokenExpiration);
          localStorage.setItem("userEmail", data.email);
          localStorage.setItem("userId", data.localId);
          dispatch("setLogoutTimer", data.expiresIn);
        })
        .catch(err => {});
    },
    logout({ commit }) {
      commit("LOGOUT_USER");
      localStorage.removeItem("userToken");
      localStorage.removeItem("tokenExpiresIn");
      localStorage.removeItem("userEmail");
      localStorage.removeItem("userId");
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
