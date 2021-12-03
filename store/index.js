import { createStore } from 'vuex';

const store = createStore({
	state: {
		// Tasks will be an oject with three properties:
		// task, startTime, endTime
		// New features: Members working on project "default = me"
		taskList: [
		
		],
		newTaskBool: false,
		newTaskInput: '',
		currentTask: '',
	},

	mutations: {
		taskInput(state, task) {
			state.newTaskInput = task;
			console.log(task)
		},
		addNewTask(state) {
			state.currentTask = {
				task: state.newTaskInput,
				taskStart: new Date().toLocaleTimeString(),
				taskEnd: '',
			};
			state.newTaskBool = false
		},
		endTask(state) {
			state.currentTask.taskEnd =
				new Date().toLocaleTimeString();
			state.taskList.push(state.currentTask)
			state.currentTask = '';
		},
		toggleTaskInput(state) {
			state.newTaskBool = !state.newTaskBool;
		},
	},
	actions: {
		taskInput({ commit }, task) {
			commit('taskInput', task);
		},
		addNewTask({ commit }) {
			commit('addNewTask');
		},
		endTask({commit}) {
			commit('endTask');
		},
		toggleTaskInput({ commit }) {
			commit('toggleTaskInput');
		},
	},
});

export default store;
