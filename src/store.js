import { createStore } from 'vuex';

const store = createStore({
  state: {
    locale: 'en', // Default locale
  },
  mutations: {
    setLocale(state, locale) {
      state.locale = locale;
    },
  },
  actions: {
    changeLocale({ commit }, locale) {
      commit('setLocale', locale);
    },
  },
});

export default store;