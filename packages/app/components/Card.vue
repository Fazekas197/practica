<template>
	<div
		class="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-[20%] bg-white shadow-2xl rounded-3xl flex flex-col overflow-hidden h-full"
	>
		<SanityImage :asset-id="img" class="w-full h-72 object-cover" />

		<div class="flex flex-col flex-1 px-4 py-5 space-y-4">
			<h4 class="text-3xl text-center">{{ title }}</h4>
			<p class="text-lg flex-1">{{ text }}</p>

			<!-- Button pinned to the bottom -->
			<UButton
				v-if="cta"
				:to="cta.link"
				class="w-full justify-center mt-auto"
			>
				{{ cta.title }}
			</UButton>
		</div>
	</div>
</template>

<script lang="ts" setup>
	type CTA = {
		title: string;
		link: string;
	};

	const props = defineProps<{
		img?: string;
		title?: string;
		text?: string;
		cta?: CTA;
	}>();
</script>
