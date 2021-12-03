import { createStore } from 'vuex';

const store = createStore({
	state: {
		// Tasks will be an oject with three properties:
		// task, startTime, endTime
		// New features: Members working on project "default = me"
		taskList: [
			{
				task: 'Implement Vuex',
				taskStart: '4:26:00 PM',
				taskEnd: '',
			},
		],
		// Current Task will just be the last task added to the array.
		currentTask: '',
	},

	mutations: {
		taskInput(state, task) {
			state.currentTask = task;
		},
		addNewTask(state) {
			state.taskList.push({
				task: state.currentTask,
				taskStart: new Date().toLocaleTimeString(),
				taskEnd: '',
			});
			state.currentTask = '';
		},
		endTask(state) {
			state.taskList[state.taskList.length - 1].taskEnd =
				new Date().toLocaleTimeString();
			state.currentTask = '';
		},
	},
	actions: {
		taskInput({ commit }, task) {
			commit('taskInput', task);
		},
		addNewTask({ commit }) {
			commit('addNewTask');
		},
	},
});

export default store;
