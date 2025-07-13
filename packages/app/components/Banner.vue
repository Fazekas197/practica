<template>
	<main
		class="relative group w-full bg-cover bg-bottom h-[60vh] flex items-end"
	>
		<!-- Background -->
		<SanityImage
			:asset-id="img"
			class="absolute inset-0 h-full w-full object-cover"
		/>
		<div class="absolute inset-0 bg-black/35" />

		<!-- Overlay Content -->
		<section
			class="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-12 lg:px-20 gap-3 lg:gap-6"
		>
			<h1 class="text-5xl lg:text-7xl">
				{{ title }}
			</h1>
			<p class="text-xl lg:text-2xl">{{ promotion }}</p>
		</section>
	</main>
</template>

<script setup lang="ts">
	const props = withDefaults(
		defineProps<{
			img?: string;
			title?: string;
			promotion?: string;
		}>(),
		{
			img: "/placeholder.png",
			promotion: "Praesent vehicula dapibus neque dolor sit amet",
			title: "Lorem Ipsum",
		}
	);
</script>
