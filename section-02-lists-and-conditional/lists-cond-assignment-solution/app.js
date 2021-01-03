const app = Vue.createApp({
	data() {
		return {
			enteredText: '',
			tasks: [],
			listIsVisible: true,
		};
	},
	computed: {
		buttonCaption() {
			return this.listIsVisible ? 'Hide List' : 'Show List';
		},
	},
	methods: {
		addTask() {
			this.tasks.push(this.enteredText);
		},
		toggleVisibility() {
			this.listIsVisible = !this.listIsVisible;
		},
	},
}).mount('#assignment');