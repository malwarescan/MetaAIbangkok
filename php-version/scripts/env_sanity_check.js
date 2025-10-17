#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

function has(p) {
  try {
    require.resolve(p);
    return true;
  } catch {
    return false;
  }
}

const findings = [];

function checkOneTailwind() {
  const copies = [];
  try {
    copies.push(require.resolve("tailwindcss"));
  } catch {}
  try {
    copies.push(
      require.resolve("tailwindcss", {
        paths: [path.join(process.cwd(), "node_modules/tailwindcss")],
      }),
    );
  } catch {}
  const uniq = Array.from(new Set(copies.map((p) => path.dirname(p))));
  findings.push(
    uniq.length > 1
      ? "❌ Multiple tailwindcss copies detected."
      : "✅ Single tailwindcss installation.",
  );
}

function checkPreline() {
  const prelineRuntime = has("preline");
  const prelineDist = fs.existsSync(
    path.join(process.cwd(), "node_modules/preline/dist/preline.js"),
  );
  findings.push(
    prelineRuntime && prelineDist ? "✅ Preline runtime present." : "❌ Preline runtime not found.",
  );
}

function checkTailwindConfig() {
  const cfg = path.join(process.cwd(), "tailwind.config.js");
  if (!fs.existsSync(cfg)) return findings.push("❌ tailwind.config.js missing.");
  const src = fs.readFileSync(cfg, "utf8");
  if (!src.includes("preline/plugin"))
    findings.push("❌ Preline plugin missing in Tailwind config.");
  if (!src.includes("node_modules/preline/dist/*.js"))
    findings.push("❌ Preline dist not included in content globs.");
  findings.push("✅ Tailwind config present.");
}

function checkHTMLIncludes() {
  const layout = path.join(process.cwd(), "views/layout.php");
  if (fs.existsSync(layout)) {
    const src = fs.readFileSync(layout, "utf8");
    findings.push(
      src.includes("/js/preline.js")
        ? "✅ preline.js included in layout."
        : "❌ preline.js not included in layout.",
    );
  }
}

checkOneTailwind();
checkPreline();
checkTailwindConfig();
checkHTMLIncludes();

fs.writeFileSync("env_sanity_report.md", findings.map((x) => "- " + x).join("\n"));
console.log("Done. See env_sanity_report.md");
