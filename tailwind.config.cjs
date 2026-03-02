/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'bg-dark': '#0a0a0f',
				'primary': '#1a1a2e',
				'accent': '#8b0000',
				'text-primary': '#e8e8e8',
				'text-secondary': '#888899',
				'highlight': '#2d1b4e',
			},
			fontFamily: {
				'heading': ['Cinzel', 'serif'],
				'body': ['Inter', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
