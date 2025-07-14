<template>
	<div class="overflow-hidden">
		<Header :links="links" class="absolute">
			<template v-slot:logo>
				<h1 class="text-xl lg:text-2xl">SONOR</h1>
			</template>
		</Header>
		<slot></slot>
		<Footer
			title="SONOR"
			:location="footerData.location"
			:links="links"
			:contacts="footerData.contactDetails"
			credit="Proiect realizat de Fazekaș Cosmin - grupa IE21"
		/>
	</div>
</template>

<script setup>
	const query = groq`*[_type == "generic"][0]{location,contactDetails}`;
	const { data: footerData } = await useSanityQuery(query);

	const links = [
		{ text: "Acasă", link: "/" },
		{ text: "Produse", link: "/produse" },
		{ text: "Noutăți", link: "/noutati" },
		{ text: "Echipă", link: "/echipa" },
	];
</script>
