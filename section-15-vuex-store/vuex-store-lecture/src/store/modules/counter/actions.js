export default {
	// we can use same name, but it is not the same
	increment(context) {
		setTimeout(() => {
			context.commit('increment'); // we commit MUTATION method
		}, 2000);
	},
	increase(context, payload) {
		context.commit('increase', payload);
	},
};
