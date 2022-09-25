const defaultTheme = require('tailwindcss/defaultTheme');
// Tailwind config
const plugin = require('tailwindcss/plugin');

// Let's create a plugin that adds utilities!
const capitalizeFirst = plugin(function ({ addUtilities }) {
    const newUtilities = {
        '.capitalize-first:first-letter': {
            textTransform: 'uppercase',
        },
    };
    addUtilities(newUtilities, ['responsive', 'hover']);
});

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            sm: '620px',
            md: '768px',
            // => @media (min-width: 768px) { ... }

            lg: '1024px',
            // => @media (min-width: 1024px) { ... }

            xl: '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            '3xl': '1800px',
        },
        extend: {
            zIndex: {
                5: '5',
                15: '15',
                25: '25',
            },
            colors: {
                gray: {
                    100: '#F5F8FA',
                    200: '#EFF2F5',
                    300: '#E4E6EF',
                    400: '#B5B5C3',
                    500: '#A1A5B7',
                    600: '#7E8299',
                    700: '#5E6278',
                    800: '#3F4254',
                    850: '#2E303E',
                    900: '#181C32',
                },
                red: {
                    100: '#FFF5F8',
                    200: '#FCD9E2',
                    500: '#F1416C',
                    700: '#D9214E',
                    900: '#A0183A',
                },
                green: {
                    100: '#E8FEF3',
                    200: '#DEF7E9',
                    500: '#50CD89',
                    700: '#47BE7D',
                },
                yellow: {
                    100: '#FFF8DD',
                    200: '#FFF2C2',
                    500: '#FBC702',
                    700: '#F1BC00',
                },
                blue: {
                    100: '#EBF5FF',
                    200: '#D8EBFD',
                    500: '#3699FF',
                    600: '#228FFF',
                    700: '#187DE4',
                },
                purple: {
                    100: '#F8F5FF',
                    200: '#F2ECFD',
                    500: '#7239EA',
                    700: '#5014D0',
                },
                orange: {
                    500: '#F97316',
                },
                alert: {
                    red: {
                        100: '#fed7e1',
                        200: '#fbc6d3',
                        500: '#f1416c',
                        700: '#912741',
                    },
                    blue: {
                        100: '#ccecfd',
                        200: '#b3e2fd',
                        500: '#2e9ff7',
                        700: '#005f94',
                    },
                    green: {
                        100: '#dcf5e7',
                        200: '#cbf0dc',
                        500: '#50cd89',
                        700: '#205237',
                    },
                    yellow: {
                        100: '#fff4cc',
                        200: '#ffeeb3',
                        500: '#fbc702',
                        700: '#665000',
                    },
                    purple: {
                        100: '#e3d7fb',
                        200: '#d5c4f9',
                        500: '#7239ea',
                        700: '#44228c',
                    },
                },
            },
            opacity: {
                15: '0.15',
                35: '0.35',
                65: '0.65',
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            screens: {
                nhover: { raw: '(hover: hover)' },
            },
            boxShadow: {
                'md-custom': '0px 6.5px 19.5px 6.5px #00000014',
            },
            maxWidth: {
                '5.5xl': '69rem',
            },
            minWidth: {
                72: '18rem',
                80: '20rem',
            },
            minHeight: {
                11: '2.75rem',
            },
            spacing: {
                7.5: '1.875rem',
            },
            keyframes: {
                'fade-in-down': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-10px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                spin: {
                    from: {
                        transform: 'rotate(0deg)',
                    },
                    to: {
                        transform: 'rotate(360deg)',
                    },
                },
                flash: {
                    '0%': {
                        backgroundColor: '#2e9ff7',
                    },
                    '100%': {
                        backgroundColor: '#fff',
                    },
                },
            },
            animation: {
                'fade-in-down': 'fade-in-down 0.25s ease-out',
                spin: 'spin 1s linear infinite',
                flash: 'flash ease 1s 1',
            },
        },
    },
    variants: {
        extend: {
            ringColor: ['focus-visible'],
            ringOffsetColor: ['focus-visible'],
            ringOffsetWidth: ['focus-visible'],
            ringOpacity: ['focus-visible'],
            ringWidth: ['focus-visible'],
            textDecoration: ['focus-visible'],
            backgroundColor: ['active'],
            opacity: ['active'],
        },
    },
    plugins: [capitalizeFirst, require('@tailwindcss/line-clamp')],
};
