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
				taskEnd: '5:30:00 PM',
			},
		],
		// Current Task will just be the last task added to the array.
		currentTask: '',
	},
	// Methods that change data in the state
	// "Commit" mutations
	// CAN access state
	// CAN change state
	// CANNOT make async calls (to apis for example)
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
	},
	// Actions - Methods
	// "Dispatch" actions
	// CAN access state
	// CAN make async calls (to apis for example)
	// CANNOT change state
	actions: {
		taskInput({ commit }, task) {
			commit('taskInput', task);
		},
		addNewTask({ commit }) {
			commit('addNewTask');
			// console.log(state.currentTask)
		},
	},
	// Also have access to getters
	getters: {},
	// Modules - Allows us to break up store into other parts

	modules: {},
});

export default store;
