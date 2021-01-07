<template>
	<form @submit.prevent="sumbitData">
		<div>
			<label>Name</label>
			<input type="text" v-model="enteredName" />
		</div>
		<div>
			<label>Phone</label>
			<input type="tel" v-model="enteredPhone" />
		</div>
		<div>
			<label>E-mail</label>
			<input type="email" v-model="enteredEmail" />
		</div>
		<div>
			<button>Add Contact</button>
		</div>
	</form>
</template>

<script>
export default {
	emits: ['add-contact'],
	data() {
		return {
			enteredName: '',
			enteredPhone: '',
			enteredEmail: '',
		};
	},
	methods: {
		sumbitData() {
			// emit custom event from this component,
			// and forward data to any component which will subscribe/listen to it
			// in our case in <new-friend @add-contact="addContact"></new-friend> in App.vue
			this.$emit(
				'add-contact',
				this.enteredName,
				this.enteredPhone,
				this.enteredEmail
			);
		},
	},
};
</script>
