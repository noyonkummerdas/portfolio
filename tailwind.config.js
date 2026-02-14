/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                inter: ["Inter", "sans-serif"],
            },
            colors: {
                primary: "#38BDF8", // Cyan / Sky Blue
                secondary: "#020617", // Dark Navy
                accent: "#22C55E", // Soft Green
                background: "#020617", // Dark Navy
                surface: "#0F172A", // Slightly lighter navy for cards
                textMain: "#E5E7EB", // Light Gray / White
            },
            animation: {
                "blob": "blob 7s infinite",
            },
            keyframes: {
                blob: {
                    "0%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                    "33%": {
                        transform: "translate(30px, -50px) scale(1.1)",
                    },
                    "66%": {
                        transform: "translate(-20px, 20px) scale(0.9)",
                    },
                    "100%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                },
            },
        },
    },
    plugins: [],
}
