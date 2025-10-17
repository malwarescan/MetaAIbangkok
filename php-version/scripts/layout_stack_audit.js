#!/usr/bin/env node
const fg = require("fast-glob");
const fs = require("fs");

const FILES = ["**/*.{php,html}", "!node_modules/**"];

(async function run() {
  const files = await fg(FILES, { dot: true });
  const out = ["# Layout Stack Audit\n"];
  for (const f of files) {
    const src = fs.readFileSync(f, "utf8");
    const notes = [];
    if (/hs-overlay/.test(src) && /overflow-(hidden|clip)/.test(src)) {
      notes.push("overlay near overflow-hidden/clip — may clip sidebar/drawer");
    }
    if (/hs-overlay/.test(src) && /z-\[?0\]?/.test(src)) {
      notes.push("overlay has low z-index");
    }
    if (/sticky top-0/.test(src) && /z-/.test(src) && /hs-overlay/.test(src)) {
      notes.push("sticky header with z-index may block overlay clicks");
    }
    if (notes.length) out.push(`\n## ${f}\n` + notes.map((x) => "- " + x).join("\n"));
  }
  fs.writeFileSync("layout_stack_report.md", out.join("\n"));
  console.log("Done. See layout_stack_report.md");
})();
