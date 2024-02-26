const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
    default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,jsx,js,tsx,ts}"],
    darkMode: "class",
    theme: {
        colors: {
            light: "#f1f5f9",
            dark: "#0f172a",
            orange: {
                100: "#ffd5c3",
                200: "#ffb290",
                300: "#ff8754",
                400: "#ff7033",
                500: "#f65915",
                600: "#de4302",
                700: "#802c08",
                800: "#802c08",
                900: "#5a1d03",
            },
            green: {
                100: "#caffe2",
                200: "#93ffc5",
                300: "#56fba2",
                400: "#26ed82",
                500: "#0ecf67",
                600: "#09a551",
                700: "#068641",
                800: "#045d2d",
                900: "#023c1d",
            },
            yellow: {
                100: "#fef9c3",
                200: "#fef08a",
                300: "#fde047",
                400: "#facc15",
                500: "#eab308",
                600: "#ca8a04",
                700: "#a16207",
                800: "#70410c",
                900: "#4d2b0c",
            },
            blue: {
                100: "#deeeff",
                200: "#afd5ff",
                300: "#71b4ff",
                400: "#3f95f4",
                500: "#0878f5",
                600: "#0f62bf",
                700: "#04448c",
                800: "#002753",
                900: "#00152c",
            },
            red: {
                100: "#ffdce0",
                200: "#fda1ac",
                300: "#f55f71",
                400: "#e6394e",
                500: "#dc1c33",
                600: "#b21629",
                700: "#800716",
                800: "#4c010a",
                900: "#280005",
            },
            slate: {
                100: "#f1f5f9",
                200: "#e2e8f0",
                300: "#cbd5e1",
                400: "#94a3b8",
                500: "#64748b",
                600: "#475569",
                700: "#334155",
                800: "#1e293b",
                900: "#0f172a",
            },
        },
        fontSize: {
            xs: "0.75rem",
            sm: "0.875rem",
            base: "1rem",
            lg: "1.125rem",
            xl: "1.25rem",
            "2xl": "1.5rem",
            "3xl": "1.875rem",
            "4xl": "2.25rem",
            "5xl": "3rem",
            "6xl": "3.75rem",
            "7xl": "4.5rem",
            "8xl": "6rem",
            "9xl": "8rem",
        },
        fontFamily: {
            poppins: "Poppins",
        },
        borderRadius: {
            none: "0",
            xs: "0.0625rem",
            sm: "0.3125rem",
            default: "0.625rem",
            lg: "1.25rem",
            xl: "1.5625rem",
            "2xl": "3.125rem",
            full: "9999px",
        },
        extend: {
            animation: {
                first: "moveVertical 30s ease infinite",
                second: "moveInCircle 20s reverse infinite",
                third: "moveInCircle 40s linear infinite",
                fourth: "moveHorizontal 40s ease infinite",
                fifth: "moveInCircle 20s ease infinite",
            },
            keyframes: {
                moveHorizontal: {
                    "0%": {
                        transform: "translateX(-50%) translateY(-10%)",
                    },
                    "50%": {
                        transform: "translateX(50%) translateY(10%)",
                    },
                    "100%": {
                        transform: "translateX(-50%) translateY(-10%)",
                    },
                },
                moveInCircle: {
                    "0%": {
                        transform: "rotate(0deg)",
                    },
                    "50%": {
                        transform: "rotate(180deg)",
                    },
                    "100%": {
                        transform: "rotate(360deg)",
                    },
                },
                moveVertical: {
                    "0%": {
                        transform: "translateY(-50%)",
                    },
                    "50%": {
                        transform: "translateY(50%)",
                    },
                    "100%": {
                        transform: "translateY(-50%)",
                    },
                },
            },
        },
    },
    plugins: [addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({
        ":root": newVars,
    });
}
