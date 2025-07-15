<template>
	<div class="m-12 xl:m-20 space-y-16">
		<div class="space-y-3">
			<h2 class="text-4xl xl:text-6xl">Produse</h2>
			<UInputMenu
				v-model="value"
				icon="i-lucide-search"
				size="xl"
				:items="items"
				class="w-fit"
			/>
		</div>
		<div class="flex flex-wrap items-stretch gap-10 justify-center">
			<Card
				v-for="prod in filteredProducts"
				:img="prod.images[0].ref"
				:title="prod.name"
				:text="`Cod Produs: ${prod.cod}`"
				:cta="{
					title: `${prod.price} RON`,
					link: `/produse/${prod._id}`,
				}"
				class="xl:h-[35rem]"
			/>
		</div>
	</div>
</template>

<script setup>
	const query = groq`
    *[_type == "product"]{
        _id,
        category -> {
            name
        },
        cod,
        desc,
        images[] {
            "ref": asset._ref
        },
        name,
        price
    }`;
	const { data } = await useSanityQuery(query);

	const catQuery = groq`*[_type == "categories"]{ name }`;
	const { data: categories } = await useSanityQuery(catQuery);

	const items = computed(() => {
		return [
			"Toate Categoriile",
			...categories.value.map((cat) => cat.name),
		];
	});
	const value = ref(items.value[0]);

	const filteredProducts = computed(() => {
		if (!data.value) return [];
		if (value.value === "Toate Categoriile") {
			return data.value;
		}
		return data.value.filter(
			(product) => product.category?.name === value.value
		);
	});
</script>
