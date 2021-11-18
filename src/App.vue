<template>
	<body>
		<Header />
		<Navbar />
		<main>
			<!-- Div to display the current time -->
			<CurrentTime />
			<!-- Add task form -->
			<AddTask />
			<!-- Div to Display current Task -->
			<TaskDiv />
			<button @click="click">Generate</button>
		</main>
	</body>
</template>

<script>
// Imports //
import Header from './components/Header.vue';
import Navbar from './components/Navbar.vue';
import CurrentTime from './components/CurrentTime.vue';
import AddTask from './components/Tasks/AddTask.vue';
import TaskDiv from './components/Tasks/TaskDiv.vue';

export default {
	name: 'App',
	components: {
		Header,
		Navbar,
		CurrentTime,
		AddTask,
		TaskDiv,
	},
	methods: {
		click() {
			alert('Button Clicked!');
		},
	},
};
</script>

<style>
@font-face {
	font-family: Fira;
	src: url('./assets/Fonts/Fira_Code/FiraCode-VariableFont_wght.ttf');
}
/* General CSS */
* {
	font-family: Fira;
}

body {
	margin: 0;
}
h2 {
	font-size: 1.1em;
}
/* START of main css */
main {
	display: flex;
	flex-direction: column;
	align-items: center;
}

/* Generate Spreadsheet Button */
button {
	position: relative;
	top: 100px;
	background-color: rgb(163, 34, 249);
	color: white;
	border: none;
	border-radius: 5px;
	font-size: 2em;
	padding: 5px;
}
</style>
