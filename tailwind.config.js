module.exports = {
    mode: "jit",
    purge: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}"],
    theme: {
        fontFamily: {
            "pt-sans": ['"PT Sans"', "sans-serif"],
            "playfair-display": ['"Playfair Display"', "serif"],
        },
        container: {
            center: true,
            padding: "1rem",
        },
        extend: {
            zIndex: {
                "-1": "-1",
            },
        },
    },
};
