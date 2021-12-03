<template>
	<div>
		<h2>Completed Tasks</h2>
		<table class="table-auto border">
			<thead>
				<tr>
					<th>Task</th>
					<th>Start</th>
					<th>End</th>
				</tr>
			</thead>
			<tbody>
				<tr
					class="bg-green-200"
					:key="i"
					v-for="(task, i) in $store.state.taskList"
				>
					<td class="bg-red-200">{{ task.task }}</td>

					<td class="bg-blue-200">{{ task.taskStart }}</td>

					<td class="bg-yellow-200">{{ task.taskEnd }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
	name: 'AllTasks',
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
