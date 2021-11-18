<template>
	<form action="" @submit="submit">
		<input type="text" placeholder="Create new task" />
	</form>
</template>

<script>
export default {
	name: 'AddTask',
	methods: {
		submit(event) {
			event.preventDefault();
			console.log(event.target[0].value);
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
