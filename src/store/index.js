import Vue from 'vue'
import Vuex from 'vuex'
// import _ from 'lodash';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        elevators: [
            {id: 0, travelling: false, current_floor: 0, calledFromStorey: null},
            {id: 1, travelling: false, current_floor: 0, calledFromStorey: null},
        ],
        storeys: 7,
        init: false,
        blockConfig: false,
        servicedElevatorCalls: [],
    },
    mutations: {
        elevatorReachedFloor(state, elevatorObj){
            let elevatorId = elevatorObj.id;
            const index = state.elevators.findIndex(elevator => elevator.id === elevatorId);
            state.elevators.splice(index, 1, {
                id: elevatorId,
                travelling: false,
                current_floor:elevatorObj.calledFromStorey,
                calledFromStorey: null
            });

        },
        changeElevators(state, elevators) {
            state.elevators = [];
            while (state.elevators.length !== elevators) {
                state.elevators.push({
                    id: state.elevators.length,
                    travelling: false,
                    current_floor: 0,
                    calledFromStorey: null
                })
            }
        },
        changeStoreys(state, storeys) {
            state.storeys = storeys
        },
        init(state, payload) {
            state.init = payload;
        },
        updateElevator(state, payload) {
            let elevatorId = payload.elevatorObj.elevatorId;
            if (elevatorId >= 0) {
                const currentStateCalledElevator = state.elevators.filter(elevator => elevator.id === elevatorId)[0]
                const current_floor = currentStateCalledElevator.current_floor;
                if (current_floor !== payload.calledFromStorey) {
                    const index = state.elevators.findIndex(elevator => elevator.id === elevatorId);
                    state.elevators.splice(index, 1, {
                        id: elevatorId,
                        travelling: true,
                        current_floor,
                        calledFromStorey: payload.calledFromStorey
                    });
                }
            }
        }
    },
    actions: {
        ELEVATOR_CALL: function ({commit, state}, calledFromStorey) {
            const floorHasElevator = state.elevators.filter(elevatorObj => {
                return elevatorObj.current_floor === calledFromStorey
            });

            const elevatorObj = getClosestAvailableElevatorObj(state, calledFromStorey);
            if (elevatorObj === -1 || floorHasElevator.length > 0)
                return null
            state.blockConfig = true;
            commit('updateElevator', {elevatorObj, calledFromStorey});
            return state.elevators[elevatorObj.elevatorId];
        }
    },
});

function getClosestAvailableElevatorObj(state, calledFromStorey) {
    const stateElevators = state.elevators;
    let elevatorDistMatrix = [];
    let allElevatorsBusy;

    stateElevators.forEach((elevator, index) => {
        if (elevator.travelling === false) {
            elevatorDistMatrix.push({
                elevatorId: elevator.id,
                distance: Math.abs(elevator.current_floor - calledFromStorey)
            });
        }
        if (elevatorDistMatrix.length === 0 && stateElevators.length === index + 1) {
            allElevatorsBusy = true
        }
    });

    return allElevatorsBusy ? -1 : elevatorDistMatrix.reduce((current, next) =>
        current.distance < next.distance ? current : next
    );
}
