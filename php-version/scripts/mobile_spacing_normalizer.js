#!/usr/bin/env node
const fg = require("fast-glob");
const fs = require("fs");

// Map of "too large for mobile" -> ["compactMobile", "md:original"]
const DOWNMAP = {
  // padding/margin y
  "py-20": ["py-10", "md:py-20"],
  "py-16": ["py-10", "md:py-16"],
  "py-12": ["py-8", "md:py-12"],
  "pt-20": ["pt-12", "md:pt-20"],
  "pb-16": ["pb-10", "md:pb-16"],
  "p-10": ["p-6", "md:p-10"],
  "p-8": ["p-6", "md:p-8"],
  // margins
  "mt-8": ["mt-6", "md:mt-8"],
  "mt-6": ["mt-4", "md:mt-6"],
  // gap/space
  "gap-10": ["gap-8", "md:gap-10"],
  "gap-8": ["gap-4", "md:gap-8"],
  "gap-6": ["gap-4", "md:gap-6"],
  "space-y-16": ["space-y-10", "md:space-y-16"],
  "space-y-12": ["space-y-8", "md:space-y-12"],
  // Extended oversized classes
  "py-24": ["py-10", "md:py-16"],
  "pt-24": ["pt-12", "md:pt-20"],
  "pb-24": ["pb-10", "md:pb-16"],
  "my-24": ["my-8", "md:my-14"],
  "mt-24": ["mt-8", "md:mt-14"],
  "mb-24": ["mb-8", "md:mb-14"],
  "gap-12": ["gap-4", "md:gap-8"],
  "gap-14": ["gap-5", "md:gap-10"],
  "py-28": ["py-12", "md:py-20"],
  "py-32": ["py-12", "md:py-24"],
  "py-36": ["py-12", "md:py-28"],
};

const GLOBS = ["**/*.{php,html,js,ts}", "!node_modules/**", "!public/**"];

(async () => {
  const files = await fg(GLOBS);
  let changes = 0;
  for (const f of files) {
    const src = fs.readFileSync(f, "utf8");
    let out = src;

    for (const key of Object.keys(DOWNMAP)) {
      // Skip if already responsive (md:key present)
      if (out.includes(`md:${key}`)) continue;

      // Replace bare key with mobile+md pair (avoid replacing inside other words)
      const re = new RegExp(`(?<!:)\\b${key}\\b`, "g");
      if (re.test(out)) {
        const [mobile, mdv] = DOWNMAP[key];
        out = out.replace(re, `${mobile} ${mdv}`);
      }
    }

    if (out !== src) {
      fs.writeFileSync(`${f}.bak-mobile`, src, "utf8");
      fs.writeFileSync(f, out, "utf8");
      changes++;
    }
  }
  console.log(`Mobile spacing normalization complete. Files changed: ${changes}`);
})();
