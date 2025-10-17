const fg = require("fast-glob");
const fs = require("fs");
const path = require("path");

// Scan PHP/HTML/JS/TS for conflicting unscoped Tailwind/Preline utilities within the same class attribute
// Non-destructive: outputs markdown report only

const FILE_GLOB = [
  path.join("..", "**/*.{php,html,js,ts}"),
  "!../node_modules/**",
  "!../public/**/*.min.*",
];

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
  /^overflow-/,
  /^z-/,
  /^gap-/,
];

const VARIANT_PREFIX = /^(hover:|focus:|active:|disabled:|sm:|md:|lg:|xl:|2xl:|group-hover:|aria-.*:)/;

function isExclusive(u) {
  return EXCLUSIVE_FAMILIES.some((rx) => rx.test(u));
}

function familyKey(u) {
  for (const rx of EXCLUSIVE_FAMILIES) {
    if (rx.test(u)) return rx.toString();
  }
  return null;
}

function* iterClassAttributes(src) {
  const regex = /class\s*=\s*"([^"]*)"|class\s*=\s*'([^']*)'/g;
  let m;
  while ((m = regex.exec(src))) {
    const raw = m[1] || m[2] || "";
    yield raw;
  }
}

function* iterClassListAdds(src) {
  // naive: classList.add('a', "b")
  const regex = /classList\.add\(([^)]*)\)/g;
  let m;
  while ((m = regex.exec(src))) {
    const inner = m[1];
    const tokens = [...inner.matchAll(/(["'])(.+?)\1/g)].map((x) => x[2]);
    if (tokens.length) yield tokens.join(" ");
  }
}

function analyzeConflicts(raw) {
  const parts = raw.split(/\s+/).filter(Boolean);
  const seen = {};
  const conflicts = [];

  for (let i = 0; i < parts.length; i++) {
    const c = parts[i];

    if (VARIANT_PREFIX.test(c)) continue;
    if (!isExclusive(c)) continue;

    const fk = familyKey(c);
    if (!fk) continue;

    if (seen[fk] !== undefined) {
      const prev = seen[fk];
      conflicts.push({ family: fk, previous: prev, duplicate: c });
      // keep recording last to surface cascaded conflicts
      seen[fk] = c;
    } else {
      seen[fk] = c;
    }
  }

  return conflicts;
}

(async function run() {
  const files = await fg(FILE_GLOB, { dot: true });
  const report = [];
  let totalConflicts = 0;

  for (const file of files) {
    let src;
    try {
      src = fs.readFileSync(file, "utf8");
    } catch (e) {
      continue;
    }

    const findings = [];

    for (const raw of iterClassAttributes(src)) {
      const conflicts = analyzeConflicts(raw);
      if (conflicts.length) {
        findings.push({ kind: "class", raw, conflicts });
      }
    }

    for (const raw of iterClassListAdds(src)) {
      const conflicts = analyzeConflicts(raw);
      if (conflicts.length) {
        findings.push({ kind: "classList", raw, conflicts });
      }
    }

    if (findings.length) {
      totalConflicts += findings.reduce((sum, f) => sum + f.conflicts.length, 0);
      report.push({ file, findings });
    }
  }

  const lines = [
    "# Class Conflict Read-Only Report",
    "",
    `Total files with conflicts: ${report.length}`,
    `Total conflict instances: ${totalConflicts}`,
    "",
  ];

  for (const r of report) {
    lines.push(`- **${r.file}**`);
    for (const f of r.findings) {
      const detail = f.conflicts
        .map((c) => `family ${c.family}: \`${c.previous}\` -> \`${c.duplicate}\``)
        .join(", ");
      lines.push(`  - ${f.kind}: ${detail}`);
      lines.push(`    - source: \`${f.raw}\``);
    }
  }

  const outPath = path.join("..", "class_conflict_report.md");
  fs.writeFileSync(outPath, lines.join("\n"), "utf8");
  console.log(`Done. Report written to ${outPath}`);
})();


