/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.{js,jsx,ts,tsx}",
  ],
  // safelist: [
  //   {
  //     pattern: /(bg|text|border)-(white|[a-z]+)-(\d+)/,
  //     variants: ['hover', 'focus'],
  //   },
  //   {
  //     pattern: /^(m|mx|my|p|px|py|gap|gap-x|gap-y)-?\d+$/,
  //     variants: ['hover', 'focus'],
  //   },
  //   // Width classes
  //   {
  //     pattern: /^(w|min-w|max-w)-.+?$/,
  //     variants: ['hover', 'focus'],
  //   },
  //   // Height classes
  //   {
  //     pattern:  /^(h|min-h|max-h)-.+?$/,
  //     variants: ['hover', 'focus'],
  //   },
  //   {
  //     pattern: /^(rounded|rounded-\w+)$/,
  //   }
  // ],
  important: true,
  theme: {
    extend: {},
  },
  plugins: [],
}