let app = Vue.createApp({
	data() {
		return {
			userData: '',
			userDataConfirmed: '',
		};
	},
	methods: {
		buttonHandler() {
			alert('Button clicked!');
		},
		inputHandler(event) {
			this.userData = event.target.value;
		},
		inputHandlerConfi() {
			this.confirmedName = this.name;
		},
	},
}).mount('#assignment');