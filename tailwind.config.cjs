/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'site-green': 'var(--site-green)',
			},
		},
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

					"primary":          "#C8BFB0",
					"primary-content":  "#1F1B17",
					"secondary":        "#2C2520",
					"secondary-content":"#E8E3D8",
					"accent":           "#A09080",
					"accent-content":   "#1F1B17",
					"neutral":          "#E8E3D8",
					"neutral-content":  "#1F1B17",

					"base-100": "#1F1B17",   // main content bg
					"base-200": "#1C1816",   // sidebar / card bg
					"base-300": "#302A24",   // borders, dividers
					"base-content": "#E8E3D8",

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
