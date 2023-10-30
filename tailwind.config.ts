import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/preline/dist/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        pop: ['var(--font-poppins)'],
        kan: ['var(--font-kanit)'],
        jos: ['var(--font-jost)'],
        bar: ['var(--font-barlow)'],
      },
      colors: {
        red: "#EE4C4C",
        white: "#ffffff",
        black: "#000000",
        black2: "#353535",
        primary: "#2567B2",
        primary1: "#1659A5",
        primary2: "#E8F3FF",
        primary3: "#E0EBF9",
        primary4: "#F5FCFF",
        primary5: "#377ECE",
        primary6: "#0F4F98",
        secondary: "#EDEDED",
        secondary1: "#C0C0C0",
        secondary2: "#EFEFF8",
        secondary3: "#CBCBCB"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('preline/plugin')],
}

export default config