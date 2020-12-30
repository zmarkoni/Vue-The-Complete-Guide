const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: '',
		};
	},
	computed: {
		// it's also methods but we call them as variables, without parenthesis
		// <p>Your Name: {{ fullName }}</p>
		fullName() {
			if (this.name === '') {
				return '';
			}
			return this.name + ' ' + 'Markovic';
		},
	},
	methods: {
    // events need to be METHODS
		setName(event, lastName) {
			this.name = event.target.value;
		},
		add(num) {
			this.counter = this.counter + num;
		},
		reduce(num) {
			this.counter = this.counter - num;
			// this.counter--;
		},
		resetInput() {
			this.name = '';
		},
	},
});

app.mount('#events');
