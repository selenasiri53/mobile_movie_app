/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
  theme: {
    extend: {
        colors: {
            primary: '#030014',
            secondary: '#151312',
            light: {
                100: '#D6C6FF',
                200: '#A8B5DB',
            },
            dark: {
                100: '#221f3D',
                200: '#0f0d23',
            },
            accent: '#AB8BFF',
        }
    },
  },
  plugins: [],
}

