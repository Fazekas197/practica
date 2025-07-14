export default defineAppConfig({
	ui: {
		button: {
			variants: {
				size: {
					md: {
						base: "px-10 py-3 text-base lg:px-16 lg:text-lg border-4 border-red",
					},
				},
			},
			compoundVariants: [
				{
					color: "primary",
					variant: "outline",
					class: "text-white hover:bg-red",
				},
				{
					color: "primary",
					variant: "solid",
					class: "text-white hover:bg-red/50 hover:border-white hover:text-red",
				},
			],
		},
	},
});
