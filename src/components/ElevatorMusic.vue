<template>
    <div>
        <a @click="muteMusic($event)" class="btn float-right" :class="muted ? `btn-success` : `btn-danger`" href="#">
            {{muted ? `Play` : `Mute`}} annoying elevator music
            <font-awesome-icon v-if="!muted" icon="volume-mute"/>
            <font-awesome-icon v-if="muted" icon="volume-up"/>
        </a>
        <audio v-if="isInit" id="elevatorMusicPlayer" autoplay loop>
            <source src="audio/elevator_music.mp3" type="audio/mpeg">
        </audio>
        <audio id="elevatorDing">
            <source src="audio/ding.mp3" type="audio/mpeg" preload="auto">
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