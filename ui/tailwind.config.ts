import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        main: {
          50:  '#e0e3f8',
          100: '#b3b8e0',
          200: '#808cd0',
          300: '#4d61c0',
          400: '#2643af',
          500: '#1A237E', // main color
          600: '#151e6e',
          700: '#10185c',
          800: '#0c124b',
          900: '#080d39',
          950: '#05092d'
        },
        secondary: {
          50:  '#FFF5F6',
          100: '#FFEBED',
          200: '#FFD5D9',
          300: '#FFBFC5',
          400: '#FFA9B0',
          500: '#FFCDD2', // secondary color
          600: '#E6B9BB',
          700: '#CC9CA3',
          800: '#B3838A',
          900: '#996A72',
          950: '#805359'
        },
      }
    }
  }
}
