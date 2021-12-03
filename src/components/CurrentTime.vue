<template>
	<div class="current-time-div">
		<h2>Current Time</h2>
		<p class="time">{{ dateTime}}</p>
	</div>
</template>

<script>
const date = new Date();

export default {
	name: 'CurrentTime',
	data() {
		return {
			dateTime: date.toLocaleTimeString(),
			timer: undefined,
		};
	},
	methods: {
		setDateTime() {
			const date = new Date();
			this.dateTime = date.toLocaleTimeString();
		},
	},
	beforeMount() {
		this.timer = setInterval(this.setDateTime, 1000);
	},
	beforeUnmount() {
		clearInterval(this.timer);
	},
};
</script>

<style>
/* Current Time Div */
.current-time-div {
	text-align: center;
}

.time {
	font-size: 1.5em;
}
</style>
