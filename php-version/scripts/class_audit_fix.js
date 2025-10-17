#!/usr/bin/env node
const fg = require("fast-glob");
const fs = require("fs");
const path = require("path");

const FILE_GLOB = ["**/*.{php,html,js,ts}", "!node_modules", "!.git", "!public/**/*.min.*"];

const EXCLUSIVE_FAMILIES = [
  /^bg-/,
  /^text-(?!opacity)/,
  /^font-/,
  /^leading-/,
  /^tracking-/,
  /^rounded/,
  /^border(-[tblrxy])?/,
  /^shadow-/,
  /^(block|inline|inline-block|flex|inline-flex|grid|inline-grid|table|inline-table|contents|hidden)$/,
  /^items-/,
  /^justify-/,
  /^content-/,
  /^place-/,
  /^w-/,
  /^h-/,
  /^(p|px|py|pt|pr|pb|pl)-/,
  /^(m|mx|my|mt|mr|mb|ml)-/,
  /^(top|right|bottom|left)-/,
];

const VARIANT_PREFIX =
  /^(hover:|focus:|active:|disabled:|md:|lg:|xl:|2xl:|sm:|group-hover:|aria-.*:)/;

function isExclusive(u) {
  return EXCLUSIVE_FAMILIES.some((rx) => rx.test(u));
}

function familyKey(u) {
  for (const rx of EXCLUSIVE_FAMILIES) {
    if (rx.test(u)) return rx.toString();
  }
  return null;
}

function extractClassBlocks(src) {
  const blocks = [];
  const regex = /class\s*=\s*"([^"]*)"|class\s*=\s*'([^']*)'/g;
  let m;
  while ((m = regex.exec(src))) {
    const raw = m[1] || m[2] || "";
    blocks.push({ start: m.index, end: regex.lastIndex, raw, quote: m[1] ? '"' : "'" });
  }
  return blocks;
}

function analyzeAndFixClasses(raw) {
  const parts = raw.split(/\s+/).filter(Boolean);
  const keep = [];
  const seen = {}; // { familyKey: indexKept }
  const removed = [];

  for (let i = 0; i < parts.length; i++) {
    const c = parts[i];

    // If variant-scoped (md:, hover:, etc.), keep as-is.
    if (VARIANT_PREFIX.test(c)) {
      keep.push(c);
      continue;
    }

    // Not exclusive? keep.
    if (!isExclusive(c)) {
      keep.push(c);
      continue;
    }

    const fk = familyKey(c);
    if (!fk) {
      keep.push(c);
      continue;
    }

    // If we've already seen a class from this family (unscoped), remove the earlier one.
    if (seen[fk] !== undefined) {
      removed.push({ dup: c, replacedPrevious: keep[seen[fk]] });
      keep[seen[fk]] = c; // last one wins: replace earlier
    } else {
      seen[fk] = keep.length;
      keep.push(c);
    }
  }

  return { fixed: keep.join(" "), removed };
}

(async function run() {
  const files = await fg(FILE_GLOB, { dot: true });
  const report = [];
  for (const file of files) {
    let src = fs.readFileSync(file, "utf8");
    const blocks = extractClassBlocks(src);
    if (!blocks.length) continue;

    let mutated = false;
    let offset = 0;

    for (const b of blocks) {
      const start = b.start + src.slice(0, b.start).lastIndexOf("class");
      const match = src.slice(start).match(/class\s*=\s*["']/);
      if (!match) continue;

      const valueStart = start + match[0].length;
      const quote = match[0].endsWith('"') ? '"' : "'";
      const valueEnd = src.indexOf(quote, valueStart);
      const raw = src.slice(valueStart, valueEnd);

      const { fixed, removed } = analyzeAndFixClasses(raw);
      if (removed.length) {
        mutated = true;
        report.push({ file, removed, before: raw, after: fixed });
        // replace in src
        src = src.slice(0, valueStart) + fixed + src.slice(valueEnd);
      }
    }

    if (mutated) {
      const backup = file + ".bak-class-audit";
      if (!fs.existsSync(backup)) fs.writeFileSync(backup, fs.readFileSync(file, "utf8"));
      fs.writeFileSync(file, src);
    }
  }

  // Write report
  const out = [
    "# Class Conflict Report",
    "",
    ...report.map((r) => {
      const lines = [];
      lines.push(`- **${r.file}**`);
      lines.push(
        `  - removed: ${r.removed.map((x) => `\`${x.replacedPrevious}\`→\`${x.dup}\``).join(", ")}`,
      );
      lines.push(`  - before: \`${r.before}\``);
      lines.push(`  - after : \`${r.after}\``);
      return lines.join("\n");
    }),
  ].join("\n");
  fs.writeFileSync("class_audit_report.md", out);
  console.log("Done. See class_audit_report.md");
})();
