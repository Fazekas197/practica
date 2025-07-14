<template>
	<div
		class="grid place-items-center grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-12 gap-x-6 lg:gap-24 lg:gap-y-16 w-fit mx-auto"
	>
		<div v-for="elem in elems" class="flex flex-col items-center w-fit">
			<UIcon :name="elem.icon" class="size-10 lg:size-15" />
			<p class="text-xl lg:text-2xl">{{ elem.text }}</p>
		</div>
	</div>
</template>

<script setup lang="ts">
	type Elem = {
		icon: string;
		text: string;
	};

	const props = defineProps<{
		elems?: Elem[];
	}>();
</script>
