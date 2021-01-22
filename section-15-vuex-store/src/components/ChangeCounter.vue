<template>
	<button @click="addOne">Add 2</button>
</template>

<script>
export default {
	methods: {
		addOne() {
            // trigger mutation 'incerement which is defined in main.js'
			// this.$store.commit('increment');
			// use Actions instead off Mutations
			this.$store.dispatch('increment');
		},
	},
};
</script>
