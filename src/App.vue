<template>
	<body>
		<Header />
		<Navbar />
		<main>
			<!-- Div to display the current time -->
			<CurrentTime />
			<!-- Div to Display current Task -->
			<TaskDiv />
			<!-- <button class="gen-btn" @click="click">Generate</button> -->
		</main>
	</body>
</template>

<script>
// Imports //
import Header from './components/Header.vue';
import Navbar from './components/Navbar.vue';
import CurrentTime from './components/CurrentTime.vue';
import TaskDiv from './components/Tasks/TaskDiv.vue';

import './assets/tailwind.css'

export default {
	name: 'App',
	components: {
		Header,
		Navbar,
		CurrentTime,
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
.gen-btn {
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
