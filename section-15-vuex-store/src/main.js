import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';

const store = createStore({
	state() {
		return {
			counter: 0,
		};
	},
	mutations: {
		increment(state) {
			state.counter = state.counter + 2;
		},
		increase(state, payload) {
			state.counter = state.counter + payload.value;
		},
	},
	actions: {
		// we can use same name, but it is not the same
		increment(context) {
			setTimeout(() => {
				context.commit('increment'); // we commit MUTATION method
			}, 2000);
		},
		increase(context, payload) {
			context.commit('increase', payload);
		}
	},
	getters: {
		finalCounter(state) {
			return state.counter * 3;
		},
		normalizedCounter(state, getters) {
			const finalCounter = getters.finalCounter;
			if (finalCounter < 0) {
				return 0;
			}
			if (finalCounter > 100) {
				return 100;
			} else {
				return finalCounter;
			}
		},
	},
});
const app = createApp(App);

app.use(store);
app.mount('#app');
