<template>
	<main class="relative h-dvh w-dvw">
		<!-- Background -->
		<SanityImage
			:asset-id="img"
			class="absolute inset-0 h-full w-full object-cover"
		/>
		<div class="absolute inset-0 bg-black/40" />

		<!-- Overlay Content -->
		<section
			class="absolute inset-0 items-center text-center lg:items-start lg:text-start flex flex-col justify-center text-white px-4 lg:px-20 gap-6 lg:w-3/5"
		>
			<header class="space-y-2 lg:space-y-4">
				<h1 class="text-4xl md:text-6xl xl:text-8xl">
					{{ title }}
				</h1>
				<p class="text-lg md:text-3xl xl:text-4xl font-semibold">
					{{ tagline }}
				</p>
			</header>

			<div class="space-x-4 lg:space-x-5">
				<UButton :to="cta1.link" class="text-lg lg:text-xl">
					{{ cta1.title }}
				</UButton>
				<UButton
					:to="cta2.link"
					variant="outline"
					class="text-lg lg:text-xl"
				>
					{{ cta2.title }}
				</UButton>
			</div>
		</section>
	</main>
</template>

<script setup lang="ts">
	type CTA = {
		title: string;
		link: string;
	};

	const props = defineProps<{
		img: string;
		tagline: string;
		title: string;
		cta1: CTA;
		cta2: CTA;
	}>();
</script>
