<template>
    <div id="app">
        <div class="top-header">
            <span class="my-1 float-left">Elevator Shaft&nbsp;<sub>v1.0.0</sub></span>

        </div>
        <elevator-music/>
        <div class="splash">
            <div class="splash__caption">
                <h1 class="my-5">Elevator Shaft&nbsp;<sub>v1.0.0</sub></h1>
                <button @click="letsRide" type="button" class="btn btn-lg">Lets Ride</button>
            </div>
        </div>
        <elevator-config/>

    </div>
</template>

<script>
    import ElevatorMusic from './components/ElevatorMusic'
    import ElevatorConfig from './components/ElevatorConfig'

    export default {
        name: 'App',
        components: {
            ElevatorMusic,
            ElevatorConfig,
        },
        computed: {
            getElevators: function () {
                return this.$store.state.elevators;
            },
            getFloors: function () {
                return this.$store.state.floors;
            },
        },
        mounted() {
            $('.top-header').hide()

        },
        methods: {
            letsRide: function () {
                this.$store.commit('init', true)
                $('.splash').fadeOut()
                $('.top-header').slideDown()

            },

        },
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Modak&display=swap');

    $pallete_turq: #75c8ab;
    $pallete_brown: #593d29;
    $pallete_orange: #f4a125;

    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        height: 100vh;
        width: 100vw;
    }

    .splash {
        position: fixed;
        width: 100%;
        height: 100%;
        font-family: 'Modak', cursive;
        background: $pallete_brown;
        color: $pallete_turq;
        h1 {
            font-size: 72px;
            sub{
                font-size: 30px;
                font-family: 'Anton', cursive;
            }
        }
        button{
            background: $pallete_orange;
            font-family: 'Anton', cursive;

        }
    }
    .top-header{display: none}

    .splash__caption {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    audio {
        /*display: none;*/
    }
</style>
