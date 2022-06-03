module.exports = {
  mode: 'jit',
  darkMode: 'class',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './templates/**/*.{js,ts,jsx,tsx}',
    './slices/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        type: 'type 1.8s ease-out .8s 1 normal both',
        blink: 'blink 2s linear infinite',
      },
      keyframes: {
        type: {
          '0%': {width: '0ch'},
          '5%, 10%': {width: '1ch'},
          '15%, 20%': {width: '2ch'},
          '25%, 30%': {width: '3ch'},
          '35%, 40%': {width: '4ch'},
          '45%, 50%': {width: '5ch'},
          '55%, 60%': {width: '6ch'},
          '65%, 70%': {width: '7ch'},
          '75%, 80%': {width: '8ch'},
          '85%, 90%': {width: '9ch'},
          '95%': {width: '10ch'},
        },
        blink: {
          '50%': {
            opacity: '0',
          },
        },
      },
    },
    screens: {
      '2xs': '357px',
      xs: '457px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      'window': '1288px'
    },
    colors: {
      transparent: 'transparent',
      purple: {
        100: '#8C65AC',
      },
      blue: {
        100: '#77C5E3',
      },
      green: {
        100: '#00EB99',
      },
      yellow: {
        100: '#FAEE7A',
      },
      orange: {
        100: '#F5A66C',
      },
      pink: {
        100: '#E279B5',
      },
      neutral: {
        0: '#FFFFFF',
        15: '#CBD1DA',
        30: '#9FAABB',
        50: '#75797E',
        65: '#374151',
        80: '#2B323B',
        100: '#111827',
      },
      primary: {
        5: '#FAFCFF',
        25: '#E1EAFF',
        50: '#C7D8FF',
        75: '#5D83DE',
        100: '#1A56DB',
        200: '#1E40AF',
      },
      error: {
        5: '#FFF7F8',
        25: '#FFD7DB',
        50: '#FFAFB6',
        75: '#FF8791',
        100: '#FF5F6D',
      },
      warning: {
        5: '#FEF9F2',
        25: '#FBE2BF',
        50: '#F8C680',
        75: '#FBE2BF',
        100: '#FEF9F2',
      },
      success: {
        5: '#F5FCF7',
        25: '#CDEFD5',
        50: '#9ADFAA',
        75: '#67D080',
        100: '#35C056',
      }
    },
    fontSize: {
      xl: ['6rem', {
        lineHeight: '5.7rem',
      }],
      '1xl': ['4.5rem', {
        lineHeight: '4.95rem',
      }],
      '2xl': ['4rem', {
        lineHeight: '4.4rem',
      }],
      '3xl': ['3rem', {
        lineHeight: '3.9rem',
      }],
      '4xl': ['2.25rem', {
        lineHeight: '2.475rem',
      }],
      '5xl': ['1.75rem', {
        lineHeight: '2.1rem',
      }],
      pLGSemiBold: ['1.5rem', {
        lineHeight: '1.8rem',
      }],
      pLGRegular: ['1.5rem', {
        lineHeight: '2.1rem',
      }],
      pMDSemiBold: ['1.25rem', {
        lineHeight: '1.5rem',
      }],
      pMDRegular: ['1.25rem', {
        lineHeight: '1.75rem',
      }],
      pSMSemiBold: ['1rem', {
        lineHeight: '1.2rem',
      }],
      pSMRegular: ['1rem', {
        lineHeight: '1.2rem',
      }],
      codeLGSemiBold: ['1.5rem', {
        lineHeight: '1.65rem',
      }],
      codeLGRegular: ['1.5rem', {
        lineHeight: '1.95rem',
      }],
      codeMDSemiBold: ['1.125rem', {
        lineHeight: '1.2375rem',
      }],
      codeMDRegular: ['1.125rem', {
        lineHeight: '1.4625rem',
      }],
    },
    fontFamily: {
      'ABCWhyteEdu-Heavy': ['ABCWhyteEdu-Heavy'],
      'ABCWhyteEdu-Bold': ['ABCWhyteEdu-Bold'],
      'ABCWhyteEdu-Medium': ['ABCWhyteEdu-Medium'],
      'ABCWhyteEdu-Regular': ['ABCWhyteEdu-Regular'],
      'FiraCode-SemiBold': ['FiraCode-SemiBold'],
      'FiraCode-Regular': ['FiraCode-Regular'],
    },
  },
  plugins: [],
}
