<template>
    <div class="elevator--wrapper">
        <div v-for="(elevator,index) in getElevators"
             v-bind:key="index"
             class="elevator"
        >{{elevator.id}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "Elevators",
        computed: {
            getElevators: function () {
                return this.$store.state.elevators;
            },
            getElevatorWidth: function () {
                // let elevators = this.$store.state.elevators;
                return 120

            }
        },

    }
</script>

<style scoped>
    .elevator--wrapper{
        position: absolute;
        left: 10px;
        bottom: 0;
        display: flex;
        flex-direction: row;
        align-items: stretch;
        width: calc(83.333333% - 20px);
    }
    .elevator {
        position: relative;
        height: 50px;
        background: red;
        margin: 0 5px;
        display: inline-block;
        flex: 1;

    }
</style>