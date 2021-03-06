import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    covid_agreement: false
  },
  mutations: {
    covidAgreement(state) {
      state.covid_agreement = true
    }
  },
  actions: {
  },
  modules: {
  }
})
