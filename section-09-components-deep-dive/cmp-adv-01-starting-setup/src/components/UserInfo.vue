<template>
	<section>
		<base-card>
			<template v-slot:header>
				<h3>{{ fullName }}</h3>
				<base-badge
					:type="role"
					:caption="role.toUpperCase()"
				></base-badge>
			</template>
			<template v-slot:default>
				<!-- <p>{{ infoText }}</p> will be rendered Default content -->
				<p>{{ infoText }}</p>
			</template>
		</base-card>
	</section>
</template>

<script>
import BaseCard from './BaseCard.vue'; // slot
export default {
	components: { BaseCard },
	props: ['fullName', 'infoText', 'role'],
};
</script>