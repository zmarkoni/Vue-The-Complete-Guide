<template>
	<li>
		<h2>{{ friend.name }}</h2>
		<button @click="toogleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
		<ul v-if="detailsAreVisible">
			<li><strong>Phone: </strong>{{ friend.phone }}</li>
			<li><strong>Email: </strong>{{ friend.email }}</li>
		</ul>
	</li>
</template>

<script>
export default {
	data() {
		return {
			detailsAreVisible: false,
			friend: {
				id: 'zoran',
				name: 'Zoran Markovic',
				phone: '0123 45678 90',
				email: 'zoran@localhost.com',
			},
		};
    },
    methods: {
        toogleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
};
</script>
