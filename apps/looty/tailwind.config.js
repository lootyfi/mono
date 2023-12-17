/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {     
      'body': ['var(--font-body)'],
      },
      boxShadow: {
        left: '-0.5rem 0 1.5rem #000',
        right: '0.5rem 0 1.5rem #000',
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-image.svg')",
      }

    },
  },
  plugins: [
		require("tailwindcss-animate"),	],
}
