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

	<div class="my-20 space-y-16">
		<h2 class="text-4xl xl:text-6xl text-center">De ce noi?</h2>
		<Grid :elems="data.benefits" />
	</div>

	<div class="bg-gray-900 text-white px-10 py-20 space-y-12">
		<h2 class="text-4xl xl:text-6xl text-center">Ce zic clienții</h2>
		<UCarousel
			v-slot="{ item }"
			arrows
			:items="testimonials"
			loop
			:ui="{
				arrows: 'flex justify-center gap-10 lg:gap-0 mt-10',
				prev: 'block scale-250 relative bg-transparent hover:bg-transparent -translate-y-0 start-0 text-white border-none ring-0 p-0 lg:p-0',
				next: 'block scale-250 relative bg-transparent hover:bg-transparent -translate-y-0 start-0 text-white  border-none ring-0 p-0 lg:p-0',
			}"
		>
			<Testimonials
				:rating="item.rating"
				:author="item.name"
				:testimonial="item.review"
			/>
		</UCarousel>
	</div>

	<Newsletter />
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
		"aboutImg": aboutImg.asset._ref,
		benefits
	}`;
	const { data } = await useSanityQuery(query);

	const testimonialQuery = groq`
	*[_type == "testimonial"]{
		name,
    	rating, 
   	 	review
	}`;
	const { data: testimonials } = await useSanityQuery(testimonialQuery);
</script>
