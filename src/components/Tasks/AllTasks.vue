<template>
	<div class="previous-task-div">
		<h2>Previous Tasks</h2>
		<table class="task-table">
			<tr class="table-headings">
				<th>Task</th>
				<th>Start</th>
				<th>End</th>
			</tr>
			<tr  :key='i' v-for='(task, i) in list' class="table-row-one">
				<td>{{task.text}}</td>

				<td>{{task.taskStart}}</td>

				<td>{{task.taskEnd}}</td>

			</tr>

		</table>
	</div>
</template>

<script>
export default {
	name: 'AllTasks',
	data(){
		return {
			array: ['item One', 'item two', 'item three']
		}
	},
	props: {
		list: Object
	}
};
</script>

<style>
.previous-task-div {
	margin-top: 20px;
	/* width: 50vw; */
}

/* 

.task-table {
	display: flex;
	justify-content: center;
}

.table-headings {
	text-align: center;
	margin: auto;
}

 */
th {
	font-weight: bold;
}

td {
	font-size: 1.3em;
	padding: 10px;
}
</style>
