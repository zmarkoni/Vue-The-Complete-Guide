const app = Vue.createApp({
	data() {
		return {
			inputClass: '',
			isVisible: true,
			bgColor: '',
		};
	},
	computed: {
		parClasses() {
			return {
				// return className 'user1'
				user1: this.inputClass === 'user1',
				user2: this.inputClass === 'user2',
				// this.isVisible ? 'visible' : 'hidden', // NE PISE SE OVAKO
				// will return className 'visible'
				visible: this.isVisible,
				hidden: !this.isVisible,
			};
		},
	},
	methods: {
		toggleVisibility() {
			this.isVisible = !this.isVisible;
		},

		// No need, we can do it directly with v-model
		/* 
        setBgColor(event) {
            this.bgColor = event.target.value;
        } 
        */
	},
});
app.mount('#assignment');
