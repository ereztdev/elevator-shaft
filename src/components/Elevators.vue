<template>
    <div class="elevator--wrapper">
        <div v-for="(elevator,index) in getElevators"
             v-bind:key="index"
             v-bind:elevator-id="index"
             v-bind:style="{bottom:elevator.current_floor * 100+`px`}"
             class="elevator"
        >{{elevator.id + 1}}<br><span class="text-white">{{elevator.travelling ? `in-use` : 'ready'}}</span>
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