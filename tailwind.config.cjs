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

					// Navy from the lion logo favicon
					"primary":          "#1B2A44",
					"primary-content":  "#ffffff",

					"secondary":        "#2E4870",
					"secondary-content":"#ffffff",

					"accent":           "#4A72AA",
					"accent-content":   "#ffffff",

					"neutral":          "#1B2A44",
					"neutral-content":  "#ffffff",

					// Backgrounds
					"base-100": "#ffffff",       // main page background
					"base-200": "#F0F2F7",       // sidebar / card background
					"base-300": "#DDE2EE",       // borders, dividers

					// Main text — dark navy so it reads cleanly on white
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
		],
		logs: false,
	},
};
