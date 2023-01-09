/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        extraLarge: "8rem",
        mediumLarge: "6rem",
      },
      colors: {
        "gray-50": "#EEEEEE",
        "gray-30": "#F5EDDC",
        "gray-100": "#BAD7E9",
        "primary-100": "#E14D2A",
        "primary-300": "#FD841F",
        "primary-500": "#850000",
        "secondary-100": "#FFF80A",
        "secondary-300": "#FFE15D",
        "secondary-500": "#FFD580",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};
