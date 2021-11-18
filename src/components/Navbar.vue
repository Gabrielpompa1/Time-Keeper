<template>
	<nav>
		<ul>
			<li @click="click">New Task</li>
			<li @click="click">Edit</li>
			<li @click="click">Log</li>
		</ul>
	</nav>
</template>

<script>
export default {
	name: 'Navbar',
};
</script>

<style>
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
</style>
