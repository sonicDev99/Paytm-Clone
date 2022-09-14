/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./*.html'],
    theme: {
        fontFamily: {
            inter: ['Inter', 'sans-serif'],
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
        extend: {
            colors: {
                lightBlue: '#F0FBFF',
                brightBlue: '#00BAF2',
                darkBlue: '#0F4A8A',
                lightGray: '#F5F7FA',
                blueH: '#00AFE3',
                blueHD: '#0d3e80',
                blueB: '#40C2ED',
            },
        },
    },
    plugins: [],
};
