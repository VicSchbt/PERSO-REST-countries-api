/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Nunito Sans', 'sans-serif'],
			},
			colors: {
				'dark-blue': 'hsl(209, 23%, 22%)',
				'very-dark-blue': 'hsl(207, 26%, 17%)',
			},
		},
	},
	plugins: [],
};
