const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: '',
			lastName: '',
			//fullName: '' // not used in 'computed', only for watch
		};
	},
	watch: {
		// method need to be the same as in DATA
		/*
		name(newValue, oldValue) {
		// will trigger whenever 'name' change
		if (newValue === '') {
			this.fullName = '';
		} else {
			this.fullName = newValue + ' ' + 'Markovic';
		}
		}
		*/
		counter(value) {
			if (value > 50) {
				this.counter = 0;
			}
		},
	},
	computed: {
		// it's also methods but we call them as variables, without parenthesis
		// <p>Your Name: {{ fullName }}</p>
		// it is used like DATA property
		fullName() {
			if (this.name === '' || this.lastName === '') {
				return '';
			}
			return this.name + ' ' + this.lastName;
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
			this.lastName = '';
		},
	},
});

app.mount('#events');
