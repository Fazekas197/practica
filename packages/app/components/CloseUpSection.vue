<template>
	<div class="bg-gray-900 text-white">
		<section
			class="px-6 py-8 space-y-6 lg:flex lg:gap-x-10 lg:justify-center lg:px-60 lg:py-16 mx-auto"
		>
			<SanityImage
				:asset-id="img"
				format="webp"
				class="lg:w-1/2 object-cover"
			/>

			<div class="space-y-4 lg:w-1/2">
				<h2
					ref="textRef"
					class="mb-5 lg:text-6xl text-5xl leading-none"
				>
					{{ title }}
				</h2>
				<p class="text-lg leading-snug">
					{{ text }}
				</p>
				<slot />
			</div>
		</section>
	</div>
</template>

<script lang="ts" setup>
	const props = withDefaults(
		defineProps<{
			img?: string;
			title?: string;
			text?: string;
		}>(),
		{
			img: "/placeholder.png",
			title: "Lorem ipsum",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum a justo in porta. Aenean pretium placerat neque at condimentum. Praesent pharetra libero sit amet condimentum luctus. Cras at erat a erat cursus mollis ac eget arcu. Aenean quis auctor neque. Pellentesque rutrum augue et diam lacinia faucibus luctus sed lacus. Sed lobortis a eros vel interdum. Integer faucibus at erat id rhoncus. Donec luctus felis nec sapien hendrerit dignissim.",
		}
	);
</script>
