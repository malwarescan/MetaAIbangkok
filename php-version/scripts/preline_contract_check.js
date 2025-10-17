#!/usr/bin/env node
const fs = require("fs");
const fg = require("fast-glob");

const FILES = ["**/*.{php,html}", "!node_modules/**"];

(async function run() {
  const files = await fg(FILES, { dot: true });
  const report = [];
  for (const file of files) {
    const src = fs.readFileSync(file, "utf8");
    const issues = [];
    if (/hs-overlay/.test(src)) {
      if (!/data-hs-overlay/.test(src)) {
        issues.push("Overlay present but no data-hs-overlay toggle attribute found.");
      }
    }
    if (/aria-controls/.test(src) && !/aria-expanded/.test(src)) {
      issues.push("aria-controls used without aria-expanded; verify toggle states.");
    }
    if (!/HSStaticMethods/.test(src)) {
      // heuristic; runtime may be in layout
    }
    if (issues.length) {
      report.push(`## ${file}\n` + issues.map((x) => "- " + x).join("\n"));
    }
  }
  fs.writeFileSync(
    "preline_contract_report.md",
    report.join("\n\n") || "# OK: Preline contracts look present.",
  );
  console.log("Done. See preline_contract_report.md");
})();
