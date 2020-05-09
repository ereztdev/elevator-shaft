<template>
    <div v-if="isInit" id="elevatorConfig" class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="input-group input-group-lg my-5">
                    <div class="input-group-prepend">
                        <span class="input-group-text bg-warning"># Storeys</span>
                    </div>
                    <input @change="changeStoreys($event)"
                           type="number"
                           class="form-control"
                           aria-label="Large"
                           :value="getStoreys"
                           min="2"
                    >
                </div>
            </div>
            <div class="col-md-6">
                <div class="input-group input-group-lg my-5">
                    <div class="input-group-prepend">
                        <span class="input-group-text bg-warning"># Elevators</span>
                    </div>
                    <input @change="changeElevators($event)"
                           type="number"
                           class="form-control"
                           aria-label="Large"
                           :value="getElevators"
                           step="1"
                           max="30"
                           min="2"
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ElevatorConfig",
        computed: {
            isInit: function () {
                return this.$store.state.init;
            },
            getElevators: function () {
                return this.$store.state.elevators.length;
            },
            getStoreys: function () {
                return this.$store.state.storeys;
            },
        },
        methods:{
            changeStoreys: function (event) {
                this.$store.commit('changeStoreys', parseInt(event.target.value))
            },
            changeElevators: function (event) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                event.cancelBubble = true;
                this.$store.commit('changeElevators', parseInt(event.target.value))
            }
        },
    }
</script>

<style scoped>

</style>