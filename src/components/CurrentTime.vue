<template>
	<div class="current-time-div">
		<h2>Current Time</h2>
		<p class="time">{{ new Date().toLocaleTimeString() }}</p>
	</div>
</template>

<script>
export default {
    name: "CurrentTime"
};
</script>

<style></style>
