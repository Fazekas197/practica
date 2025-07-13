<template>
	<Hero
		:img="data[0].heroImg"
		:title="data[0].heroTitle"
		:tagline="data[0].heroSubtitle"
		:cta1="{ title: 'Produse', link: '/produse' }"
		:cta2="{ title: 'Noutăți', link: '/noutati' }"
	/>
</template>

<script setup>
	const query = groq`*[_type == "generic"]{heroTitle,heroSubtitle,"heroImg": heroImg.asset._ref}`;
	const { data } = await useSanityQuery(query);
</script>
