#!/usr/bin/env node
const fg = require("fast-glob");
const fs = require("fs");

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
    blocks.push({ start: m.index, end: regex.lastIndex, raw });
  }
  return blocks;
}

function analyzeAndFixClasses(raw) {
  const parts = raw.split(/\s+/).filter(Boolean);
  const keep = [];
  const seen = {};
  const removed = [];

  for (let i = 0; i < parts.length; i++) {
    const c = parts[i];

    if (VARIANT_PREFIX.test(c)) {
      keep.push(c);
      continue;
    }
    if (!isExclusive(c)) {
      keep.push(c);
      continue;
    }
    const fk = familyKey(c);
    if (!fk) {
      keep.push(c);
      continue;
    }
    if (seen[fk] !== undefined) {
      removed.push({ dup: c, replacedPrevious: keep[seen[fk]] });
      keep[seen[fk]] = c;
    } else {
      seen[fk] = keep.length;
      keep.push(c);
    }
  }

  return { fixed: keep.join(" "), removed };
}

(async function run() {
  const files = await fg(FILE_GLOB, { dot: true, cwd: process.cwd() });
  const report = [];
  for (const file of files) {
    let src = fs.readFileSync(file, "utf8");
    const blocks = extractClassBlocks(src);
    if (!blocks.length) continue;

    let mutated = false;
    for (const b of blocks) {
      const before = b.raw;
      const { fixed, removed } = analyzeAndFixClasses(before);
      if (removed.length) {
        mutated = true;
        report.push({ file, removed, before, after: fixed });
        src = src.replace(before, fixed);
      }
    }

    if (mutated) {
      const backup = file + ".bak-class-audit";
      if (!fs.existsSync(backup)) fs.writeFileSync(backup, fs.readFileSync(file, "utf8"));
      fs.writeFileSync(file, src);
    }
  }

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
