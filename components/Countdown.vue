<template>
	<div class="countdown">
		<h1 class="font-monospace">The competition starts in {{ timeRemaining }}.</h1>
	</div>
</template>

<script>
export default {

    props: {
        endTime: {
            type: String,
            default: "Fri Nov 13 2020 15:00:00 GMT+0100 (British Summer Time)"
        }
    },

	data: () => ({
        updateInterval: null,

        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
	}),

	computed: {
		timeRemaining: {
			get: function () {
			    return `${this.days} days, ${this.hours} hours, ${this.minutes} minutes and ${this.seconds} seconds`;
			}
		},
	},

    methods: {

	    updateTimeRemaining() {
            const total = Date.parse(this.endTime) - new Date().getTime();

            this.seconds = Math.floor((total / 1000) % 60);
            this.minutes = Math.floor((total / 1000 / 60) % 60);
            this.hours = Math.floor((total / (1000 * 60 * 60)) % 24);
            this.days = Math.floor(total / (1000 * 60 * 60 * 24));
        }

    },

    created () {
        this.updateTimeRemaining();
        this.updateInterval = setInterval(this.updateTimeRemaining, 100);
    },

    beforeDestroy () {
	    clearInterval(this.updateInterval);
    }

};
</script>

<style scoped>
.countdown {
	width: calc(300px + 30vw);
	text-align: center;
}
</style>
