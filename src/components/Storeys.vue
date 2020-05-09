<template>
    <div class="container-fluid storey--wrapper">
        <div v-for="(storey,index) in getStoreys" v-bind:key="index" v-bind:storey="getStoreys - storey"
             class="row floor">
            <div class="col-sm-10 floor__shaft">
                <div class="">Floor {{getStoreys - storey}}</div>
            </div>
            <div class="col-sm-2 floor__button">
                <button @click="callElevator($event)"
                        type="button"
                        class="btn btn-primary"
                        :data-storey="getStoreys - storey"
                >call<br>elevator
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Storeys",
        components: {},
        computed: {
            getStoreys: function () {
                return this.$store.state.storeys;
            },
        },
        methods: {
            callElevator: function (event) {
                let $buttonEl =  $(event.target);
                this.$store.dispatch('ELEVATOR_CALL', parseInt($(event.target).data('storey')))
                    .then(elevator => {
                            this.animateElevatorCall(elevator,$buttonEl);
                        }
                    );
            },
            animateElevatorCall: function (elevator,$buttonEl) {
                if (!elevator)
                    return false;

                let self = this;
                $buttonEl.addClass('bg-danger')
                let ttt = Math.abs(elevator.calledFromStorey - elevator.current_floor) * 1000
                $(`.elevator[elevator-id="${elevator.id}"]`)
                    .animate({bottom: `${elevator.calledFromStorey * 100}px`}, ttt,function () {
                        $buttonEl.removeClass('bg-danger');
                        $buttonEl.addClass('bg-success');
                        var sound = document.getElementById("elevatorDing");
                        sound.load();
                        sound.play();
                        setTimeout(function () {
                            self.$store.commit('elevatorReachedFloor', elevator);
                            $buttonEl.removeClass('bg-success');
                            $buttonEl.addClass('bg-primary');
                        },2000);
                    });
            }
        },
    }
</script>

<style lang="scss">
    .floor {
        height: 100px;
    }

    .floor__shaft {
        border: black 1px solid;
    }
    .floor__button {
        button {
            margin-top: 25px;
        }
    }
</style>