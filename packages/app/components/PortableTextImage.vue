<template>
	<SanityImage
		:asset-id="value.asset._ref"
		class="rounded-3xl object-cover w-full aspect-video"
	/>
</template>

<script setup>
	const props = defineProps({
		value: {
			type: Object,
			required: true,
		},
	});
</script>
