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
            100: '#FCFCFE',
            200: '#F4F4F6',
            300: '#E2E2E4',
            400: '#848A8F',
            500: '#5D5E60',
            600: '#333333'
          },
          green: '#3BBF3B',
          red: '#FF0033'
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
