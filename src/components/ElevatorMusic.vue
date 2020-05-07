<template>
    <div>
        <a @click="muteMusic($event)" class="btn float-right" :class="muted ? `btn-success` : `btn-danger`" href="#">
            {{muted ? `Play` : `Mute`}} annoying elevator music &nbsp;&nbsp;&nbsp;
<!--            <span v-if="!muted" class="fas fa-volume-mute fa-2x" style=" vertical-align: middle;"></span>-->
<!--            <span v-if="muted" class="fas fa-volume-up fa-2x" style=" vertical-align: middle;"></span>-->
            <font-awesome-icon v-if="!muted" icon="volume-mute"/>
            <font-awesome-icon v-if="muted" icon="volume-up"/>
        </a>
        <audio v-if="isInit" id="elevatorMusicPlayer" autoplay loop>
            <source src="audio/elevator_music.mp3" type="audio/mpeg">
        </audio>
    </div>
</template>

<script>
    export default {
        name: "ElevatorMusic",
        data() {
            return {
                muted: false,
            }
        },
        computed: {
            isInit: function () {
                return this.$store.state.init;
            },
        },
        mounted() {

        },
        methods: {
            muteMusic: function (event) {
                event.preventDefault();
                let audioEl = document.getElementById('elevatorMusicPlayer');
                if (!audioEl.muted) {
                    this.muted = audioEl.muted = true;
                } else {
                    this.muted = audioEl.muted = false;
                }
            }
        },
    }
</script>

<style scoped>

</style>