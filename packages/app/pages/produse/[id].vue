<template>
	<section
		class="px-6 py-8 space-y-6 lg:flex lg:gap-x-20 lg:justify-center lg:px-60 lg:py-16 mx-auto max-w-l"
	>
		<UCarousel
			v-slot="{ item }"
			arrows
			:items="data.images"
			loop
			class="w-full max-w-md mx-auto shadow-2xl"
			:ui="{
				prev: 'scale-250  bg-transparent hover:bg-transparent text-black border-none ring-0 p-0 lg:p-0',
				next: ' scale-250  bg-transparent hover:bg-transparent text-black  border-none ring-0 p-0 lg:p-0',
			}"
		>
			<SanityImage
				:asset-id="item.ref"
				format="webp"
				class="w-full object-cover"
			/>
		</UCarousel>

		<div class="space-y-4 lg:w-1/2">
			<h2 ref="textRef" class="mb-5 lg:text-6xl text-5xl leading-none">
				{{ data.name }}
			</h2>
			<p class="text-lg leading-snug">
				{{ data.desc }}
			</p>
			<p class="text-lg leading-snug">Cod Produs: {{ data.cod }}</p>
			<UButton>Comandă</UButton>
		</div>
	</section>
</template>

<script setup>
	const route = useRoute();

	const query = groq`*[_type == "product" && _id == $id][0]
	   {
	       cod,
	       desc,
	       images[] {
	           "ref": asset._ref
	       },
	       name,
	       price
	   }`;
	const { data } = await useSanityQuery(query, { id: route.params.id });
</script>
