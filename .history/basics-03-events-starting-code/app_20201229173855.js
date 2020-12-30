const app = Vue.createApp({
	data() {
		return {
			counter: 0,
		};
	},
	methods: {
		add() {
			return (this.counter = this.counter + 1);
		},
		reduce() {
			this.counter--;
		},
	},
});

app.mount('#events');
