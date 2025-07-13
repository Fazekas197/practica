<template>
	<Hero
		:img="data.heroImg"
		:title="data.heroTitle"
		:tagline="data.heroSubtitle"
		:cta1="{ title: 'Produse', link: '/produse' }"
		:cta2="{ title: 'Noutăți', link: '/noutati' }"
	/>

	<div class="my-10 mb-24 mx-10 lg:mx-0">
		<h2 class="text-4xl xl:text-6xl text-center">Categorii Populare</h2>
		<div class="xl:flex xl:gap-x-15 justify-center my-10 space-y-10">
			<Card
				v-for="cat in data.popularCategories"
				:img="cat.image"
				:title="cat.name"
				:text="cat.desc"
				:cta="{ title: 'Descoperă', link: `/produse/${cat.name}` }"
				class="mx-auto xl:m-0"
			/>
		</div>
	</div>

	<Banner
		:title="data.promoTitle"
		:promotion="data.promoDesc"
		:img="data.promoImg"
	/>

	<CloseUpSection
		:title="data.aboutTitle"
		:text="data.aboutText"
		:img="data.aboutImg"
	/>
</template>

<script setup>
	const query = groq`
	*[_type == "generic"][0]{
		heroTitle,
		heroSubtitle,
		"heroImg": heroImg.asset._ref,
		popularCategories[] -> {
			name, 
			desc, 
			"image": image.asset._ref
		},
		promoTitle, 
  		promoDesc,
  		"promoImg": promoImg.asset._ref,
		aboutTitle,
		aboutText,
		"aboutImg": aboutImg.asset._ref
	}`;
	const { data } = await useSanityQuery(query);
</script>
