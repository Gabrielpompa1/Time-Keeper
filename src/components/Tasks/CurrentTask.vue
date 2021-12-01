<template>
	<div class="current-task-div">
		<h2>Current Task</h2>
		<p class="current-task-item">{{ currTask }}</p>
	</div>
</template>

<script>
export default {
	name: 'CurrentTask',
	props: { currTask: String },
};
</script>

<style>
.current-task-item {
	font-size: 1.3em;
	font-weight: bold;
}
</style>
