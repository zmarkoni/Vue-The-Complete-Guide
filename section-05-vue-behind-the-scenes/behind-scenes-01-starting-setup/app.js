const app = Vue.createApp({
	data() {
		return {
			currentUserInput: '',
			message: 'Vue is great!',
		};
	},
	methods: {
		saveInput(event) {
			this.currentUserInput = event.target.value;
		},
		setText() {
			// this.message = this.currentUserInput;
			this.message = this.$refs.userText.value;
			//console.log(this.message = this.$refs.userText); // HTML Object
		},
	},
	beforeCreate() {
		console.log('beforeCreate()');
		// send HTTP, set timers...
	},
	created() {
		console.log('created()');
	},
	beforeMount() {
		console.log('beforeMount()');
	},
	mounted() {
		// app is visible on the page
		console.log('mounted()');
	},
	beforeUpdate() {
		// when DATA change
		console.log('beforeUpdate()');
	},
	updated() {
		console.log('updated()');
	},
	beforeUnmount() {
		console.log('beforeUnmount()');
	},
	unmounted() {
		// app is dead
		console.log('unmounted()');
	}
});

app.mount('#app');

setTimeout(function () {
  app.unmount();
}, 3000);

// Vue works like a native JS PROXY
// ....

const data = {
  message: 'Hello!',
  longMessage: 'Hello! World!'
};

const handler = {
  set(target, key, value) {
    if (key === 'message') {
      target.longMessage = value + ' World!';
    }
    target.message = value;
  }
};

const proxy = new Proxy(data, handler);

proxy.message = 'Hello!!!!';

//console.log(proxy.longMessage);