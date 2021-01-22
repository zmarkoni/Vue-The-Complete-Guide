<template>
	<div>
		<button v-if="!isAuth" @click="login">Login</button>
		<button v-if="isAuth" @click="logout">Logout</button>
	</div>
</template>

<script>
export default {
	methods: {
		login() {
			this.$store.dispatch('login');
		},
		logout() {
			this.$store.dispatch('logout');
		},
	},
	computed: {
		isAuth() {
			return this.$store.getters.userIsAuthenticated;
		}
	}
};
</script>
