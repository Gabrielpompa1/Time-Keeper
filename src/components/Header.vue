<template>
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
</template>

<script>
export default {
    name: "Header"
};
</script>

<style>/* START of Header CSS */
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
}</style>
