<template>
	<div class="overflow-hidden">
		<Header :links="links" class="absolute bg-white">
			<template v-slot:logo>
				<h1 class="text-xl lg:text-2xl">SONOR</h1>
			</template>
		</Header>
		<slot></slot>
	</div>
</template>

<script setup>
	const links = [
		{ text: "Acasă", link: "/" },
		{ text: "Produse", link: "/produse" },
		{ text: "Noutăți", link: "/noutati" },
		{ text: "Echipă", link: "/echipa" },
	];
</script>
