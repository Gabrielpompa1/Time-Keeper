<template>
	<body>
		<header>
			<h1>Time Keeper</h1>
		</header>
		<nav>
			<ul>
				<li @click='greet'>New Task</li>
				<li @click='greet'>Edit</li>
				<li @click='greet'>Log</li>
			</ul>
		</nav>
		<main>
			<!-- Div to display the current time -->
			<div class="current-time-div">
				<h2>Current Time</h2>
				<p>{{ new Date().toLocaleTimeString() }}</p>
			</div>
			<!-- Div to Display current Task -->
			<div class="task-div">
				<h2>Current Task</h2>
				<ul>
					<li>Set up app structure</li>
				</ul>
			</div>
			<button @click='greet'>Generate</button>
		</main>
	</body>
</template>


<script>
export default {
	name: 'App',
	components: {},
	methods: {
		// eslint-disable-next-line
		greet(event){
			alert('Button Clicked!')
		}
	}
};
</script>

<style>
@font-face {
	font-family: Fira;
	src: url('./assets/Fonts/Fira_Code/FiraCode-VariableFont_wght.ttf');
}
* {
	font-family: Fira;
}

body {
	margin: 0;
}
header {
	background-color: rgb(163, 34, 249);
	border: 7px solid rgb(135, 0, 226);
	width: 100vw;
	height: 20vh;
}
h1 {
	font-size: 52px;
	color: white;
	width: 220px;
	height: auto;
	margin: 10px;
}

nav {
	display: flex;
	justify-content: center;
	width: 100%;
	margin: auto;
}

nav ul {
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: space-evenly;
	padding: 0;
	margin: 0;
}

nav li {
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

main {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.current-time-div {
	text-align: center;
}

.task-div {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.task-div ul {
	padding: 0;
}

button {
	position: relative;
	top: 100px;
	background-color: rgb(163, 34, 249);
	color: white;
	border: none;
	font-size: 2em;
}
</style>
