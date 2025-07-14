<template>
	<div class="m-20 w-3/5 mx-auto space-y-12">
		<div class="space-y-6">
			<h2 class="text-4xl xl:text-6xl">{{ data.title }}</h2>
			<p class="text-lg xl:text-xl">{{ data.desc }}</p>
		</div>
		<SanityImage
			:asset-id="data.cover"
			class="rounded-3xl object-cover w-full aspect-video"
		/>

		<div class="flex flex-col gap-2 lg:gap-4">
			<PortableText :value="data.content" :components="components" />
		</div>

		<UButton to="/noutati">Înapoi</UButton>
	</div>
</template>

<script setup>
	import { PortableText } from "@portabletext/vue";
	import PortableTextImage from "../../components/PortableTextImage.vue";

	const route = useRoute();
	const query = groq`*[_type == 'news' && _id == $id][0]{content, title, "cover": cover.asset._ref, desc}`;
	const { data } = await useSanityQuery(query, {
		id: route.params.id,
	});

	const components = {
		types: {
			image: PortableTextImage,
		},
		block: {
			h1: (_, { slots }) =>
				h(
					"h1",
					{ class: "text-3xl md:text-4xl lg:text-5xl" },
					slots.default?.()
				),
			h2: (_, { slots }) =>
				h(
					"h2",
					{ class: "text-2xl md:text-3xl lg:text-4xl" },
					slots.default?.()
				),
			h3: (_, { slots }) =>
				h(
					"h3",
					{ class: "text-xl md:text-2xl lg:text-3xl" },
					slots.default?.()
				),
			h4: (_, { slots }) =>
				h(
					"h4",
					{ class: "text-lg md:text-xl lg:text-2xl" },
					slots.default?.()
				),
			normal: (_, { slots }) =>
				h("p", { class: "md:text-lg lg:text-xl" }, slots.default?.()),
		},
	};
</script>
