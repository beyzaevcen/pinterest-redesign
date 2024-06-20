/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      width: {
        '124': '31rem', // 124 değerine sahip özel genişlik sınıfı
      },
      colors: {
        custom: '#232B2F', // Yeni bir 'custom' renk tanımlaması, istediğiniz renk koduyla
      },
    },
  },
  plugins: [],
}

