<template>
    <div class="container-fluid storey--wrapper">
        <div v-for="(floor,index) in getStoreys" v-bind:key="index"  class="row floor">
            <div class="col-sm-10 floor__shaft">
                <div class="">Floor {{getStoreys - floor}}</div>
            </div>
            <div class="col-sm-2 floor__button">
                <button type="button" class="btn btn-primary">call elevator</button>
            </div>
        </div>
<!--        <div v-for="(floor,index) in getStoreys" v-bind:key="index" class="floor">-->
<!--            <div class="">Floor {{getStoreys - floor}}</div>-->
<!--        </div>-->
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