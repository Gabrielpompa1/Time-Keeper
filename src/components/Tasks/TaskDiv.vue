<template>
	<div class="task-div">
		<AddTask @new-task='newTask'/>
		<!-- Current Task Displayed -->
		<CurrentTask :currTask="currentTask"/>
		<!-- All previous completed tasks -->
		<AllTasks :list="taskList"/>
	</div>
</template>

<script>
// Imports
import CurrentTask from './CurrentTask.vue';
import AddTask from './AddTask';
import AllTasks from './AllTasks.vue';

export default {
	name: 'TaskDiv',
	components: {
		CurrentTask,
		AllTasks,
		AddTask,
	},
	data(){
		return {
			taskList: [],
			currentTask: ''
		}
	},
	methods: {
		newTask(task){
			this.taskList.push(task)
			this.currentTask = task.text
			console.log(this.taskList)
		}
	},

};
</script>

<style>
.task-div {
	margin-top: 20px;
	margin-bottom: 40px;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
