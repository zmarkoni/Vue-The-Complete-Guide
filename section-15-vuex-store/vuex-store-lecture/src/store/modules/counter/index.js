import counterMutations from './mutations.js';
import counterActions from './actions.js';
import counterGetters from './getters.js';

export default {
	namespaced: true,
	// can have all features like State
	// State inside MODULE is LOCAL
	state() {
		return {
			counter: 0,
			isLoggedIn: false,
		};
	},
	mutations: counterMutations,
	actions: counterActions,
	getters: counterGetters,
};
