module.exports = {
  content: ["./**/*.{php,html,js,ts}", "!./node_modules/**"],
  css: ["./public/css/app.css"],
  safelist: [/^hs-/, /^data-hs-/, /^i$/, /^material-symbols/, /^aria-/],
  defaultExtractor: (content) => content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
};

module.exports = {
  content: ["./**/*.{php,html,js,ts}", "!./node_modules/**"],
  css: ["./public/css/app.css"],
  safelist: [/^hs-/, /^data-hs-/, /^i$/, /^material-symbols/, /^aria-/],
  defaultExtractor: (content) => content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
};
