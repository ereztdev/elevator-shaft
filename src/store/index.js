import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    elevators: 2,
    storeys:7,
    init:false,
  },
  mutations: {
    changeElevators(state, elevators) {
      state.elevators = elevators
    },
    changeStoreys(state, storeys) {
      state.storeys = storeys
    },
    init(state, payload) {
      state.init = payload
    },
  },
  modules: {
  }
})
