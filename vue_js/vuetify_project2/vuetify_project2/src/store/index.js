import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sTitle: "",
  },

  mutations: {
    fnSetData(state, payload) {
      state.sTitle = payload;
    },
  },

  getters: {
    fnGetData(state) {
      return state.sTitle;
    },
  },

  actions: {},
  modules: {},
});
