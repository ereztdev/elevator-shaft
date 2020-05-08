import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        elevators: [{id:1,floor:0},{id:2,floor:0}],
        storeys: 7,
        init: false,
        elevatorCalls: [],
    },
    mutations: {
        changeElevators(state, elevators) {
            let i = 0;
            state.elevators = []
            while (i < elevators) {
                state.elevators.push({id: i+1, floor: 0})
              i++;
            }
        },
        changeStoreys(state, storeys) {
            state.storeys = storeys
        },
        init(state, payload) {
            state.init = payload
        },
        elevatorCall(state, storey) {
            state.elevatorCalls.push(storey)
        },

    },
    modules: {}
});
