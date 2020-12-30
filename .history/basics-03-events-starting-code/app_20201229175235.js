const app = Vue.createApp({
	data() {
		return {
      counter: 0,
      name: ''
		};
	},
	methods: {
    setName(event, lastName) {
      this.name = event.currentTarget.value;
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
