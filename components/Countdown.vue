<template>
	<div class="countdown">
		<h1 class="font-monospace">The competition starts in {{ timeRemaining }}</h1>
	</div>
</template>

<script>
export default {
	data: () => {
		return {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
		};
	},
	computed: {
		timeRemaining: {
			get: function () {
				return (
					this.days + " days " + this.hours + " hours " + this.minutes + " minutes and " + this.seconds + " seconds"
				);
			},
			set: function (endTime) {
				const total = Date.parse(endTime) - Date.parse(new Date());
				this.seconds = Math.floor((total / 1000) % 60);
				this.minutes = Math.floor((total / 1000 / 60) % 60);
				this.hours = Math.floor((total / (1000 * 60 * 60)) % 24);
				this.days = Math.floor(total / (1000 * 60 * 60 * 24));
			},
		},
	},
	created: function () {
		setInterval(
			function () {
				//timeRemaining = Date() str of end dat & time
				this.timeRemaining = "Fri Nov 13 2020 15:00:00 GMT+0100 (British Summer Time)";
			}.bind(this),
			1000
		);
	},
};
</script>

<style scoped>
.countdown {
	width: calc(300px + 30vw);
	text-align: center;
}
</style>
