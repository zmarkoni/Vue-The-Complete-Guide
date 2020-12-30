const app = Vue.createApp({
	data() {
		return {
			counter: 0,
		};
	},
	methods: {
		add() {
			return (this.counter = this.counter + num);
		},
		reduce() {
			this.counter--;
		},
	},
});

app.mount('#events');
