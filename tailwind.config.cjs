/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,js,jsx,svelte}"],
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
  theme:{
    fontFamily:{
      'sans':['Catamaran','system-ui'],
      'serif':['Ultra','system-ui']
    }
  }
}
