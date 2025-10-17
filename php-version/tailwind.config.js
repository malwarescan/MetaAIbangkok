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
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.text-engraved': {
          color: 'rgb(229 231 235)',
          textShadow: '1px 1px 2px rgba(0,0,0,0.3), -1px -1px 2px rgba(255,255,255,0.7)',
        },
        '.text-embedded-dark': {
          color: 'rgb(107 114 128)',
          textShadow: 'inset 1px 1px 2px rgba(255,255,255,0.4), inset -1px -1px 2px rgba(0,0,0,0.4)',
        },
        // Apply letterpress effect to all descendants when used on a container
        '.text-engraved-all, .text-engraved-all *': {
          textShadow: '1px 1px 0 rgba(0,0,0,.18), -1px -1px 0 rgba(255,255,255,.75)'
        },
        '.text-embedded-all, .text-embedded-all *': {
          textShadow: '1px 1px 0 rgba(0,0,0,.65), -1px -1px 0 rgba(255,255,255,.06)'
        }
      })
    })
  ],
  safelist: [
    { pattern: /^hs-/ }, // Preline components
    { pattern: /^data-hs-/ }, // Preline data attrs
    { pattern: /^i$/ }, // icon utility 'i'
    { pattern: /^material-symbols/ }, // material icons
    { pattern: /^aria-/ }, // aria-state patterns if used in classes
  ],
};
