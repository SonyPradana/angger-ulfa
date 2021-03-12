import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    covid_agreement: false,
    peoples: []
  },
  mutations: {
    covidAgreement(state) {
      state.covid_agreement = true
    },
    async loadPeople() {
      return await axios.get('https://simpuslerep.com/API/v1.0/Caremony/CaremonyMessage.json')
        .then(respone => respone.data)
        .then(json => {
          if (json.status == 'ok') {
            this.state.peoples = json.data
          }
        })
    }
  },
  actions: {
  },
  modules: {
  }
})
