<template>
	<form action="" @submit.prevent="$store.dispatch('addNewTask')">
		<input v-model="newTaskText" type="text" placeholder="Create new task" />
	</form>
</template>

<script>
export default {
	name: 'AddTask',
	methods: {
		onSubmit(){
			console.log('Submitted')
		}
	},
	computed: {
		newTaskText: {
			get() {
				return this.$store.state.currentTask;
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
