module.exports = {
  mode : 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkmode: false,
  theme: {
    extend: {
      fontFamily : {
        sans : ['Barlow', 'sans-serif']
      },
      colors : {
        gray : {
          100 : '#E0E6E9',
          500: '#ABBBC2',
          700: '#393C49',
          800: '#13283F',
          900: '#0F172A',
        },
        primary : '#0EA5E9',
        accent : {
          blue: '#65B0F6',
          orange: '#FFB572',
          red: '#FF7CA3',
          green: '#50D1AA',
          purple : '#9290FE'
        }
      },
      boxShadow : {
        primary : '0px 8px 24px rgba(234, 124, 105, 0.32)',
        'inverse-top' : '4px 4px 0 #252836',
        'inverse-bottom' : '4px -4px 0 #252836'
      }
    },
  },
  plugins: [],
}
