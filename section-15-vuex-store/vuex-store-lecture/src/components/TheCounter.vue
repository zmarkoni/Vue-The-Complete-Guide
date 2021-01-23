<template>
	<!-- <h3>{{ counter }}</h3> -->
	<h3>{{ finalCounter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	computed: {
		/* counter() {
			return this.$store.getters.finalCounter;
		}, */
		// Instead we can use mapGetters to get getters methods
		...mapGetters('numbers', ['finalCounter']),
		//            namespace,  property
	},
};
</script>
