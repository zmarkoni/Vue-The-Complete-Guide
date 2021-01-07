<template>
	<section>
		<form @submit.prevent="submitData">
			<div>
				<label for="name">Name </label>
				<input type="text" v-model="enteredName" />
			</div>
			<div>
				<label for="name">Age </label>
				<input type="text" v-model="enteredAge" />
			</div>
			<button>Add new user</button>
		</form>
	</section>
</template>

<script>
export default {
	emits: ['add-user'],
	data() {
		return {
			enteredName: '',
			enteredAge: '',
		};
	},
	methods: {
		submitData() {
			this.$emit('add-user', this.enteredName, this.enteredAge);
		},
	},
};
</script>
