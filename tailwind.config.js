/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                yellow: 'var(--yellow)',
                pink: 'var(--pink)',
                cyan: 'var(--cyan)',
                bg: 'var(--bg)',
                text: 'var(--text)',
                muted: 'var(--muted)',
            },
            fontFamily: {
                bebas: ['"Bebas Neue"', 'sans-serif'],
                sans: ['"DM Sans"', 'sans-serif'],
                mono: ['"IBM Plex Mono"', 'monospace'],
            }
        },
    },
    plugins: [],
}
