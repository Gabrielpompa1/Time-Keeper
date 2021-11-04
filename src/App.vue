<template>
	<body>
		<header>
			<div class="header-info">
				<h1 class="time-text">Time</h1>
				<div class="clock">
					<div class="clock-hand-hour"></div>
					<div class="clock-hand-minute"></div>
				</div>
				<h1>Keeper</h1>
			</div>
		</header>
		<nav>
			<ul>
				<li @click="click">New Task</li>
				<li @click="click">Edit</li>
				<li @click="click">Log</li>
			</ul>
		</nav>
		<main>
			<!-- Div to display the current time -->
			<div class="current-time-div">
				<h2>Current Time</h2>
				<p class="time">{{ new Date().toLocaleTimeString() }}</p>

				<!-- New task form -->
				<form action="" @submit="submit">
					<input type="text" placeholder="Create new task" />
				</form>
			</div>
			<!-- Div to Display current Task -->
			<div class="task-div">
				<!-- Current Task Displayed -->
				<div class="current-task-div">
					<h2>Current Task</h2>
					<p class="current-task-item">Set up app structure</p>
				</div>
				<!-- All previous completed tasks -->
				<div class="previous-task-div">
					<h2>Previous Tasks</h2>
					<table class="task-table">
						<tr class="table-headings">
							<th>Task</th>
							<th>Start</th>
							<th>End</th>
						</tr>
						<tr class="table-row-one">
							<td>Study VueJS</td>
							<td>8:00am</td>
							<td>11:00am</td>
						</tr>
						<tr class="table-row-two"></tr>
					</table>
				</div>
			</div>
			<button @click="click">Generate</button>
		</main>
	</body>
</template>

<script>
export default {
	name: 'App',
	components: {},
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
/* START of Header CSS */
header {
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgb(163, 34, 249);
	border: 7px solid rgb(135, 0, 226);
	width: 100vw;
	height: 20%;
}
.header-info {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: flex-end;
}
.header-info h1 {
	display: flex;
	justify-content: center;
	width: 200px;
	flex: 1;
	margin: 5px;
}
.clock {
	width: 100px;
	height: 100px;
	border-radius: 50%;
	border: 4px solid grey;
	background-color: white;
	margin: 5px;
}
.clock-hand-hour {
	background-color: black;
	height: 50px;
	width: 10px;
	margin: auto;
}
.clock-hand-minute {
	background-color: black;
	position: relative;
	right: 16px;
	bottom: 13px;
	height: 40px;
	width: 10px;
	margin: auto;
	transform: rotate(60deg);
}

h1 {
	font-size: 52px;
	color: white;
	height: auto;
}
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
