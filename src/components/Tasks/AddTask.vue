<template>
	<form action="" @submit.prevent="onSubmit">
		<input type="text" v-model="task" placeholder="Create new task" />
	</form>
</template>

<script>
export default {
	name: 'AddTask',
	data() {
		return {
			task: '',
		};
	},
	methods: {
		onSubmit() {
			if (!this.task) {
				return alert('Please enter a task...');
			}

			const newTask = {
				text: this.task,
				taskStart: new Date().toLocaleTimeString(),
				taskEnd: '2:00:00 PM'
			};
			console.log(newTask);
			this.$emit('new-task', newTask);

			this.task = '';
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
