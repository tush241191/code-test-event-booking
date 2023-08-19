/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        app: {
          gray: {
            50: '#F0F0F2',
            100: '#FCFCFE',
            200: '#F4F4F6',
            300: '#E2E2E4',
            400: '#848A8F',
            500: '#5D5E60',
            600: '#333333'
          },
          green: {
            100: '#6CD26B',
            200: '#4ABC45',
            300: '#31A631',
            400: '#3BBF3B'
          },
          peach: '#FFE1CF',
          purple: {
            100: '#D3D5FF',
            200: '#2F00B2',
            300: '#473A8C',
            400: '#19005F'
          },
          red: '#FF0033'
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio')
  ]
}
