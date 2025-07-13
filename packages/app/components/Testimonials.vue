<template>
	<div class="lg:w-4/5 mx-auto space-y-6">
		<div>
			<UIcon
				:name="starIcon"
				v-for="item in Array(rating).keys()"
				class="size-10 lg:size-15 bg-yellow-300"
			/>
			<h4 class="text-3xl lg:text-4xl">{{ author }}</h4>
		</div>
		<p class="text-lg lg:text-xl">{{ testimonial }}</p>
	</div>
</template>

<script lang="ts" setup>
	const props = withDefaults(
		defineProps<{
			starIcon?: string;
			rating?: number;
			author?: string;
			testimonial?: string;
		}>(),
		{
			starIcon: "i-material-symbols-light-kid-star-sharp",
			rating: 5,
			author: "Lorem Ipsum ",
			testimonial:
				"Praesent vehicula dapibus neque dolor sit amet Praesent vehicula dapibus neque dolor sit amet Praesent vehicula dapibus neque dolor sit amet Praesent vehicula dapibus neque dolor sit amet Praesent vehicula dapibus neque dolor sit amet",
		}
	);
</script>
