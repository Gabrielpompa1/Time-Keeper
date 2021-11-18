<template>
	<div class="task-div">
		<!-- Current Task Displayed -->
		<CurrentTask />
		<!-- All previous completed tasks -->
		<AllTasks />
	</div>
</template>

<script>
// Imports
import CurrentTask from './CurrentTask.vue';
import AllTasks from './AllTasks.vue';

export default {
	name: 'TaskDiv',
	components: {
		CurrentTask,
		AllTasks,
	},
};
</script>

<style></style>
