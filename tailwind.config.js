import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        red100: "#FCEBEC",
        red700: "#BE2F34",
        red800: "#9D272B",
        moon400: "#97BFC8",
        gray50: "#FCFAFA",
        gray200: "#E5E0DF",
        gray300: "#CAC5C4",
        gray400: "#ADA8A8",
        gray500: "#8F8B8B",
        gray900: "#272525",
        primary600: "#1CA9A6",
        primary700: "#18908D",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
