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
		TaskDiv
	},
	methods: {
		click() {
			alert('Button Clicked!');
		},
		submit(event) {
			event.preventDefault();
			console.log(event.target[0].value);
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
/*  */

/*  */
/* START of Nav CSS */
nav {
	display: flex;
	justify-content: center;
	width: 100%;
}

nav ul {
	display: flex;
	flex-direction: row;
	width: 70%;
	justify-content: space-evenly;
	padding: 0;
	margin: 0;
}

nav li {
	display: flex;
	justify-content: center;
	flex: 1;
	list-style-type: none;
	font-size: 1.5em;
	font-weight: bold;
	padding: 10px;
	color: rgb(163, 34, 249);
}
nav li:hover {
	background-color: rgb(163, 34, 249);
	color: white;
}
/*  */
/* START of main css */
main {
	display: flex;
	flex-direction: column;
	align-items: center;
}

/* Current Time Div */
.current-time-div {
	text-align: center;
}

.time {
	font-size: 1.5em;
}

/* Current Time Div */

.task-div {
	margin-top: 20px;
	margin-bottom: 40px;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.current-task-item {
	font-size: 1.3em;
	font-weight: bold;
}

input {
	border: 1px solid black;
	border-radius: 2px;
	text-align: center;
	margin: 10px;
}

.previous-task-div {
	margin-top: 20px;
	width: 50vw;
}

.task-table {
	display: flex;
	justify-content: center;
}

.table-headings {
	text-align: center;
	margin: auto;
}

th {
	font-weight: bold;
}

td {
	font-size: 1.3em;
	padding: 10px;
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
/*  */
</style>
