<template>
	<form action="" @submit.prevent="$store.dispatch('addNewTask')">
		<input v-if="$store.state.newTaskBool === true" v-model="newTaskText" type="text" placeholder="Create new task" />
	</form>
</template>

<script>
export default {
	name: 'AddTask',
	computed: {
		newTaskText: {
			get() {
				return ''
			},
			set(task) {
				this.$store.dispatch('taskInput', task);

			},
		},
	},
};
</script>

<style>
input {
	border: 1px solid black;
	border-radius: 2px;
	text-align: center;
	margin: 10px;
}
</style>
