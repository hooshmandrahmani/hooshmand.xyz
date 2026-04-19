/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	daisyui: {
		themes: [
			{
				hooshmand: {
					"color-scheme": "light",

					"primary":          "#1B2A44",
					"primary-content":  "#ffffff",
					"secondary":        "#2E4870",
					"secondary-content":"#ffffff",
					"accent":           "#4A72AA",
					"accent-content":   "#ffffff",
					"neutral":          "#1B2A44",
					"neutral-content":  "#ffffff",

					"base-100": "#ffffff",
					"base-200": "#F0F2F7",
					"base-300": "#DDE2EE",
					"base-content": "#1B2A44",

					"info":    "#3B82F6",
					"success": "#22C55E",
					"warning": "#F59E0B",
					"error":   "#EF4444",
					"info-content":    "#ffffff",
					"success-content": "#ffffff",
					"warning-content": "#000000",
					"error-content":   "#ffffff",
				},
			},
			{
				"hooshmand-dark": {
					"color-scheme": "dark",

					"primary":          "#4A89DC",
					"primary-content":  "#ffffff",
					"secondary":        "#2E4870",
					"secondary-content":"#ffffff",
					"accent":           "#6B9AD4",
					"accent-content":   "#ffffff",
					"neutral":          "#C8D8EE",
					"neutral-content":  "#111827",

					"base-100": "#111827",
					"base-200": "#1A2535",
					"base-300": "#243348",
					"base-content": "#D1DCF0",

					"info":    "#3B82F6",
					"success": "#22C55E",
					"warning": "#F59E0B",
					"error":   "#EF4444",
					"info-content":    "#ffffff",
					"success-content": "#ffffff",
					"warning-content": "#000000",
					"error-content":   "#ffffff",
				},
			},
		],
		logs: false,
	},
};
