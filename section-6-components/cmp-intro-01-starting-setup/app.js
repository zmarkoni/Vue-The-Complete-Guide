const app = Vue.createApp({
	data() {
		return {
			friends: [
				{
					id: 'manuel',
					name: 'Manuel Lorenz',
					phone: '01234 5678 991',
					email: 'manuel@localhost.com',
				},
				{
					id: 'julie',
					name: 'Julie Jones',
					phone: '09876 5678 221',
					email: 'julie@localhost.com',
				},
            ]
		};
	},
});

// Component is like HTML element
// need to have 2 words to avoid clash with HTML elements
// Component is like new Vue app which is connected with main APP
// Template is required
app.component('friend-contact', {
	template: `
        <li>
          <h2>{{ friend.name }}</h2>
          <button @click="toggleDetails">{{detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
          </ul>
        </li>
    `,
	data() {
		return {
			detailsAreVisible: false,
			friend: {
				id: 'manuel',
				name: 'Manuel Lorenz',
				phone: '01234 5678 991',
				email: 'manuel@localhost.com',
			},
		};
	},
	methods: {
		toggleDetails() {
			this.detailsAreVisible = !this.detailsAreVisible;
		},
	},
}); 

app.mount('#app');