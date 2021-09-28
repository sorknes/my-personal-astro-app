const colors = require("tailwindcss/colors");

module.exports = {
    mode: "jit",
    purge: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}"],
    // more options here
    theme: {
        fontFamily: {
            "pt-sans": ['"PT Sans"', "sans-serif"],
            "playfair-display": ['"Playfair Display"', "serif"],
        },
        colors: {
            transparent: "transparent",
            black: colors.black,
            white: colors.white,
            coolGray: colors.coolGray,
            orange: {
                50: "#fbece8",
                100: "#f4c5ba",
                200: "#ec9e8d",
                300: "#e4775f",
                400: "#dd5031",
                500: "#d93d1a",
                600: "#ae3115",
                700: "#822510",
                800: "#57180a",
                900: "#2b0c05",
            },
        },
    },
};
