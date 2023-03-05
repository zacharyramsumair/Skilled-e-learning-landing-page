/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/*.{html,js}"],
	theme: {
		screens: {
			sm: "300px",
			md: "750px",
			lg: "1200px",
			xl: "1440px",
		},
		extend: {
			colors: {
				pearlWhite: "#FFFFFF",
				darkMain: "#13183E",
				mutedMain: "#8A8A99",
				pinkGrad: "#F53896",
				orangeGrad: "#FF6B4E",
				purpleGrad: "#544FFB",
			},
			gridTemplateColumns: {
				// Complex site-specific column configuration
				image: "55% 1fr",
			},

			backgroundImage: {
				"coffee-real": "url('/pics/coffee.png')",
				"footer-texture": "url('/img/footer-texture.png')",
			},
		},
	},
	plugins: [],
};
