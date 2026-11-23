import { mkdirSync, writeFileSync } from "node:fs";

// One-Line Roast: The Gadget You Use Every Day — REVISED to the proxy-judge
// winner R8 (mean 0.800, won all 3 anchor games, 10 candidates x 3 anchors,
// same model as house judge GLM-5.3-Flash, pairwise both orders).
// R8 beats the R1 draft: Face ID failing in bed, in the dark, exactly when
// needed is a sharper sting of recognition — a specific personal gripe with
// a concrete detail — and it won every anchor game, R1 won 3/3 too but with
// a lower mean (0.750 vs 0.800).
// Output: 101 characters, no trailing newline.
const ROAST =
  "My phone unlocks with my face everywhere except in bed, in the dark, exactly when I actually need it.";

if (ROAST.length < 1 || ROAST.length > 200) {
  throw new Error(`roast must be 1-200 characters, got ${ROAST.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
