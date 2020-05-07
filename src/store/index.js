import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    elevators: 2,
    floors:7,
    init:false,
  },
  mutations: {
    changeElevators(state, elevators) {
      state.elevators = elevators
    },
    changeFloors(state, floors) {
      state.floors = floors
    },
    init(state, payload) {
      state.init = payload
    },
  },
  actions: {
  },
  modules: {
  }
})
