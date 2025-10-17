/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./**/*.php", "./**/*.html", "./**/*.{js,ts}", "./node_modules/preline/dist/*.js"],
  theme: {
    extend: {
      colors: {
        // Meta Esthetic tokens
        me: {
          core: "#CDE7F3", // ice blue
          glow: "#FFFFFF", // white glow
          graphite: "#202124", // body text
          rose: "#F4E9E7", // soft accent
          silver: "#F6F8FA", // pale bg
        },
      },
      boxShadow: {
        "me-soft": "0 8px 24px rgba(205,231,243,.35)",
        "me-subtle": "0 2px 10px rgba(32,33,36,.08)",
      },
      borderRadius: {
        "2xl": "1rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
  safelist: [
    { pattern: /^hs-/ }, // Preline components
    { pattern: /^data-hs-/ }, // Preline data attrs
    { pattern: /^i$/ }, // icon utility 'i'
    { pattern: /^material-symbols/ }, // material icons
    { pattern: /^aria-/ }, // aria-state patterns if used in classes
  ],
};
