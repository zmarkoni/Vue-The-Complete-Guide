const app = Vue.createApp({
	data() {
		return {
			counter: 0,
		};
	},
	methods: {
    setName() {
      this.name
    },
		add(num) {
			return (this.counter = this.counter + num);
		},
		reduce(num) {
			return (this.counter = this.counter - num);
		},
	},
});

app.mount('#events');
