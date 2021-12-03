<template>
	<h2>Current Task</h2>
	<div class="current-task-div">
		<p class="current-task-item">
			{{ $store.state.currentTask.task }}
		</p>
		<p class="current-task-item">
			{{ $store.state.currentTask.taskStart }}
		</p>
		<button v-show="$store.state.currentTask.task" @click="$store.dispatch('endTask')">
			Complete
		</button>
	</div>
</template>

<script>
export default {
	name: 'CurrentTask',
};
</script>

<style>
.current-task-div {
	width: 80%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
.current-task-item {
	margin: 10px;
	font-size: 1.3em;
	font-weight: bold;
}
button {
	background-color: rgb(163, 34, 249);
	color: white;
	border: none;
	border-radius: 5px;
	font-size: 1em;
	padding: 5px;
}

button:hover {
	background-color: green;
}
</style>
