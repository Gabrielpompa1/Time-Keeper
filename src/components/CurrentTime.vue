<template>
	<div class="current-time-div">
		<h2>Current Time</h2>
		<p class="time">{{ new Date().toLocaleTimeString() }}</p>
	</div>
</template>

<script>
export default {
	name: 'CurrentTime',
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
