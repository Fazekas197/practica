<template>
	<div>
		<BlogCard
			v-for="news in data"
			:title="news.title"
			:img="news.cover"
			:desc="news.desc"
			:id="news._id"
		/>
		<Newsletter />
	</div>
</template>

<script setup>
	const query = groq`
	*[_type == "news"]{
		title,
    	desc, 
   	 	"cover": cover.asset._ref,
        _id
	}`;
	const { data } = await useSanityQuery(query);
</script>
