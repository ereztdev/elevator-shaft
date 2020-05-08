<template>
    <div class="container-fluid storey--wrapper">
        <div v-for="(storey,index) in getStoreys" v-bind:key="index"  class="row floor">
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
        components:{
        },
        computed: {
            getStoreys: function () {
                return this.$store.state.storeys;
            },
        },
        methods:{
            callElevator: function (event) {
                this.$store.commit('elevatorCall', parseInt($(event.target).data('storey')));
            }
        },
    }
</script>

<style lang="scss">
    .floor {
        /*width: 100%;*/
        height: 100px;
    }
    .floor__shaft{
        border: black 1px solid;
    }
    .floor__button{
        button{
            margin-top:25px;
        }
    }
</style>