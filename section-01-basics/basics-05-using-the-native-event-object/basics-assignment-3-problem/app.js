const app = Vue.createApp({
	data() {
		return {
			number: 0,
			notThere: 'Not there yet!',
			tooMuch: 'Too much!',
		};
	},
	computed: {
		result() {
			if (this.number < 16) {
				return this.notThere;
			} else if (this.number > 16) {
				return this.tooMuch;
			} else if (this.number === 16) {
				return this.number;
			}
		},
	},
	watch: {
        result() { // watch computed method 'result'
            console.log('Watcher executing...');
            const that = this;
			setTimeout(function () {
				that.number = 0;
			}, 5000);
		},
	},
	methods: {
		add(value) {
			this.number = this.number + value;
		},
	},
}).mount('#assignment');