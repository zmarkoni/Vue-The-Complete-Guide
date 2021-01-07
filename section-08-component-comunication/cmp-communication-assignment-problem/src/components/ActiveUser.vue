<template>
	<section>
		<strong>username:</strong>
		<h2>{{ name }}</h2>
		<strong>age: </strong>
		<h3>{{ age }}</h3>
	</section>
</template>

<script>
export default {
	props: {
		id: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
        },
        age: {
			type: Number,
			required: true,
		},
	},
};
</script>
