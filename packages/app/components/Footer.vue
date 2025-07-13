<template>
	<footer>
		<div
			class="lg:flex justify-between mx-auto p-16 lg:px-[7.5rem] space-y-10 lg:space-y-0 w-fit lg:w-full 2xl:w-3/4"
		>
			<!-- LOCATION + SOCIALS -->
			<div class="lg:space-y-6 space-y-4">
				<!-- Title & Location -->
				<div class="font-secondary space-y-3">
					<p class="text-lg lg:text-xl font-semibold">{{ title }}</p>
					<p class="lg:text-lg text-base leading-snug">
						{{ location }}
					</p>
				</div>
			</div>

			<!-- CONTACT -->
			<div class="font-secondary space-y-3">
				<p class="text-xl font-semibold">Contact</p>
				<div class="space-y-2">
					<div
						v-for="(contact, index) in contacts"
						:key="index"
						class="flex gap-x-2 items-center"
					>
						<UIcon :name="contact.icon" class="size-7" />
						<p class="lg:text-lg text-base leading-snug">
							{{ contact.value }}
						</p>
					</div>
				</div>
			</div>

			<!-- LINKS -->
			<div class="font-secondary space-y-3">
				<p class="text-xl font-semibold">Alte Linkuri</p>
				<div class="space-y-2">
					<NuxtLink
						v-for="link in links"
						:key="link.link"
						:to="link.link"
						class="block lg:text-lg underline"
					>
						{{ link.text }}
					</NuxtLink>
				</div>
			</div>
		</div>

		<!-- CREDITS -->
		<div
			class="bg-black text-white text-center py-3 px-10 text-xs lg:text-base font-secondary"
		>
			<p>{{ credit }}</p>
		</div>
	</footer>
</template>

<script lang="ts" setup>
	type Contact = {
		icon: string;
		value: string;
	};

	type Link = {
		text: string;
		link: string;
	};

	const props = defineProps<{
		title?: string;
		location?: string;
		contacts?: Contact[];
		links?: Link[];
		credit: string;
	}>();
</script>
