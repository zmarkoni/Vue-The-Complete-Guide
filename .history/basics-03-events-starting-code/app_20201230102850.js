const app = Vue.createApp({
	data() {
		return {
			counter: 10,
			name: '',
			confirmedName: ''
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
    submitForm() {
      alert('Sign Up');
    },
    confirmInput() {
      this.confirmedName = this.name;
    }
	},
});

app.mount('#events');
