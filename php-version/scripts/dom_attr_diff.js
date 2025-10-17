#!/usr/bin/env node
const fg = require("fast-glob");
const fs = require("fs");

const FILES = ["**/*.{php,html}", "!node_modules/**"];
const PROTECT = ["data-hs-", "aria-", "role=", "id=", "data-[", "group-[", "hs-"];

(async function run() {
  const files = await fg(FILES, { dot: true });
  const out = ["# DOM Attribute Diff (since backups)\n"];
  for (const f of files) {
    const bak = f + ".bak-class-audit";
    if (!fs.existsSync(bak)) continue;
    const a = fs.readFileSync(bak, "utf8");
    const b = fs.readFileSync(f, "utf8");
    const lost = [];
    for (const key of PROTECT) {
      if (a.includes(key) && !b.includes(key)) lost.push(key);
    }
    if (lost.length) out.push(`\n## ${f}\n- Lost: ${lost.join(", ")}`);
  }
  fs.writeFileSync("dom_attr_diff_report.md", out.join("\n"));
  console.log("Done. See dom_attr_diff_report.md");
})();
