<template>
	<div>
		<header v-if="$slots.header">
			<slot name="header"></slot>
		</header>
		<slot>
            <p>The Default Content will be rendered if there is nothing in template where we use it</p>
        </slot>
	</div>
	<!-- Used in UserInfo.vue and BadgeList.vue -->
</template>

<script>
export default {
    mounted() {
        console.log('BaseCard: ', this.$slots.default);
		//console.log('BaseCard: ', this.$slots.header);
    }
}
</script>

<style scoped>
div {
	margin: 2rem auto;
	max-width: 30rem;
	border-radius: 12px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	padding: 1rem;
}

header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>
