<template>
	<header
		class="w-full px-6 py-3 lg:px-12 lg:py-6 flex items-center justify-between text-white z-50"
	>
		<NuxtLink
			to="/"
			class="flex items-center gap-x-3 z-50"
			@click="navOpen = false"
		>
			<slot name="logo"> LOGO </slot>
		</NuxtLink>

		<button
			@click="navOpen = !navOpen"
			aria-label="Toggle navigation"
			class="relative w-8 h-8 flex flex-col z-50 justify-center items-center gap-1.5 group lg:hidden"
		>
			<span
				:class="[
					'w-8 h-0.5 bg-white transition-transform duration-300',
					navOpen ? 'rotate-45 translate-y-2' : '',
				]"
			/>
			<span
				:class="[
					'w-8 h-0.5 bg-white transition-opacity duration-300',
					navOpen ? 'opacity-0' : 'opacity-100',
				]"
			/>
			<span
				:class="[
					'w-8 h-0.5 bg-white transition-transform duration-300',
					navOpen ? '-rotate-45 -translate-y-2' : '',
				]"
			/>
		</button>

		<nav
			:class="[
				'text-center fixed inset-y-0 left-0 w-full bg-gray-900 flex flex-col justify-center px-6 gap-y-16 transform transition-transform duration-300 ease-out z-40 lg:hidden',
				navOpen ? 'translate-x-0' : '-translate-x-full',
			]"
		>
			<NuxtLink
				v-for="link in links"
				active-class="underline decoration-wavy underline-offset-4"
				:to="link.link"
				class="text-4xl"
				@click="navOpen = false"
				>{{ link.text }}</NuxtLink
			>
		</nav>

		<nav class="text-lg hidden lg:block space-x-6 z-30">
			<NuxtLink
				v-for="link in links"
				:to="link.link"
				active-class="underline decoration-wavy underline-offset-4"
				class="hover:text-beige transition decoration-2"
				>{{ link.text }}</NuxtLink
			>
		</nav>
	</header>
</template>

<script setup lang="ts">
	type Link = {
		text: string;
		link: string;
	};

	const props = withDefaults(
		defineProps<{
			links?: Link[];
		}>(),
		{
			links: () => [
				{ text: "link 1", link: "/" },
				{ text: "link 2", link: "/" },
			],
		}
	);

	const navOpen = ref(false);

	watch(navOpen, (isOpen) => {
		if (isOpen) {
			document.body.classList.add("overflow-hidden");
		} else {
			document.body.classList.remove("overflow-hidden");
		}
	});
</script>
