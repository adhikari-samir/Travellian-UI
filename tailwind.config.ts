/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Includes all files in the app directory
    "./src/Component/**/*.{js,ts,jsx,tsx,mdx}", // Includes all files in the Component directory
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", // Includes all files in the pages directory (if used)
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}", // Includes all files in the utils directory
  ],

  theme: {
    extend: {
     
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1025px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      fontWeight: {
        regular: "400",
        bold: "700",
      },
      fontFamily: {
        Rubik: ["Rubik", "sans-serif"],
      Playfair: ["Playfair Display", "sans-serif"],
      },
      textcolor:{
      lightblack: "#767E86",
      orangeball:" #FF7757",
      },
    },
  },
  plugins: [],
};