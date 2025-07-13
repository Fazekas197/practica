<template>
	<Hero
		:img="data.heroImg"
		:title="data.heroTitle"
		:tagline="data.heroSubtitle"
		:cta1="{ title: 'Produse', link: '/produse' }"
		:cta2="{ title: 'Noutăți', link: '/noutati' }"
	/>
</template>

<script setup>
	const query = groq`*[_type == "generic"][0]{heroTitle,heroSubtitle,"heroImg": heroImg.asset._ref}`;
	const { data } = await useSanityQuery(query);
</script>
