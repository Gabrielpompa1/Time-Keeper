<template>
	<div class="current-task-div">
		<h2>Current Task</h2>
		<p class="current-task-item">{{$store.state.taskList[$store.state.taskList.length - 1].task}}</p>
	</div>
</template>

<script>
export default {
	name: 'CurrentTask',
};
</script>

<style>
.current-task-item {
	font-size: 1.3em;
	font-weight: bold;
}
</style>
