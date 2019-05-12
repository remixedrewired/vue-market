import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  rangeFilters: {
    exchangeRate: [],
    grams: null,
  },
  sortBy: "priceAsc",
};

const mutations = {
  setRangeSliderValue(state, rangeData) {
    state.rangeFilters[rangeData.property] = rangeData.value;
    // Vue.set(state.rangeFilters, rangeData.property, rangeData.value);
  },
  setSortBy(state, value) {
    // Vue.set(state.sortBy, value);
    state.sortBy = value;
  },
};

const getters = {
  exchangeRateRangeSliderValue: (state) => state.rangeFilters.exchangeRate,
  gramsRangeSliderValue: (state) => state.rangeFilters.grams,
  sortBy: (state) => state.sortBy,
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
});
