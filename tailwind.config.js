module.exports = {
    mode: "jit",
    purge: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}"],
    theme: {
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
