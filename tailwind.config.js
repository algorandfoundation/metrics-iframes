/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1500px",
    },
    extend: {
      colors: {
        page: "#ffffff",
        card: {
          bg: "#e8e0f0",
          border: "#d4c8e0",
          label: "#7c6a94",
          body: "#5c4a78",
          value: "#4a148c",
          "btn-border": "#b8a8cc",
          "btn-hover": "#4a3366",
        },
      },
    },
  },
  plugins: [],
};
