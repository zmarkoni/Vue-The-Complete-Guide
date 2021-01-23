import { createStore } from 'vuex';
import counterModule from './modules/counter/index.js';

import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';

const store = createStore({
	modules: {
		numbers: counterModule, // namespace id is NUMBERS here. We use it to access methods
		// return this.$store.getters['numbers/normalizedCounter']; in FavoriteValue.vue
		// ...mapGetters('numbers', ['finalCounter']), in TheCounter.vue
	},
	state() {
		return {
			isLoggedIn: false,
		};
	},
	mutations: rootMutations,
	actions: rootActions,
	getters: rootGetters
});

export default store;
