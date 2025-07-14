<template>
	<div class="xl:flex w-3/5 mx-auto space-y-6 xl:space-x-12 my-20">
		<SanityImage :asset-id="img" class="rounded-3xl xl:h-96 object-cover" />
		<div class="space-y-3 xl:space-y-6">
			<h2 class="text-2xl xl:text-3xl">{{ title }}</h2>
			<p class="text-lg xl:text-xl">{{ desc }}</p>
			<UButton :to="`/noutati/${id}`">Citește</UButton>
		</div>
	</div>
</template>

<script setup lang="ts">
	const props = defineProps<{
		img?: string;
		title?: string;
		desc?: string;
		id?: string;
	}>();
</script>
