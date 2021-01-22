<template>
	<div>
		<button @click="increment">Increment 2</button>
		<button @click="increase({ value: 11 })">Increase 11</button>
	</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	methods: {
		/* addOne() {
            // trigger mutation 'incerement which is defined in main.js'
			// this.$store.commit('increment');
			// use Actions instead off Mutations
			this.$store.dispatch('increment');
		}, */
		// Use mapActions instead of just Actions
		...mapActions(['increment', 'increase'])
	},
};
</script>
