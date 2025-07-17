<template>
	<div
		class="m-12 xl:m-20 flex flex-col-reverse xl:flex-row xl:w-4/5 justify-center gap-y-12 xl:gap-x-16"
	>
		<div class="xl:w-1/4">
			<img src="/portret.jpg" class="object-cover" />
			<a
				href="/cv.pdf"
				target="_blank"
				class="block text-lg xl:text-xl text-center font-semibold underline"
			>
				Fazekaș Cosmin - CV
			</a>
		</div>
		<div class="space-y-6 xl:space-y-12">
			<h2 class="text-4xl xl:text-6xl">Contact</h2>
			<form @submit="sendEmail" class="space-y-3 xl:space-y-6">
				<UInput
					placeholder="Enter your email"
					size="xl"
					class="w-full"
					type="email"
					v-model="form.email"
				/>
				<UTextarea
					placeholder="Enter your message"
					size="xl"
					:rows="10"
					class="w-full"
					v-model="form.msg"
				/>
				<UButton class="p-0 !px-4 hover:bg-red/50" type="submit"
					>Trimite</UButton
				>
			</form>
		</div>
	</div>
</template>

<script setup>
	const form = ref({
		email: "",
		msg: "",
	});
	async function sendEmail() {
		const html = `
			<div>
				<h1>New Email From Your Website</h1>
				<h2>Email: ${form.value.email}</h2>
				<h2>Message:</h2>
				<h3>${form.value.msg}</h3>
			</div>
		`;

		try {
			await useFetch("/api/mailer", {
				method: "POST",
				body: {
					subject: form.value.nume + " " + form.value.prenume,
					html,
				},
			});
		} catch (error) {
			alert("Ups! Ceva nu a mers :(");
		}
	}
</script>
