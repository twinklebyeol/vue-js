import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { sTitle: "" },

  getters: {
    fnGetData(state) {
      return state.sTitle;
    },
  },
  mutations: {
    fnSetData: function (state, payload) {
      return (state.sTitle = payload); // 엉니 왜 리턴..아~
    },
  },
  actions: {},
  modules: {},
});
