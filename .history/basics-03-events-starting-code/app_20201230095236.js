const app = Vue.createApp({
	data() {
		return {
      counter: 0,
      name: ''
		};
	},
	methods: {
    setName(event, lastName) {
      this.name = event.currentTarget.value + ' ' + lastName;
    },
		add(num) {
			return (this.counter = this.counter + num);
		},
		reduce(num) {
			return (this.counter = this.counter - num);
    },
    setTimeout(() => {
      
    }, timeout);
	},
});

app.mount('#events');
