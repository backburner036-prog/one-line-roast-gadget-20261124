import { mkdirSync, writeFileSync } from "node:fs";

// One-Line Roast: The Gadget You Use Every Day — draft line (R1).
// Roasts the smartwatch: it celebrates standing up, then dies before
// you can sit back down. Specific, concrete, one first-read sting.
// Output: 101 characters, no trailing newline.
const ROAST =
  "My smartwatch buzzes to congratulate me for standing up, then dies before I can sit back down.";

if (ROAST.length < 1 || ROAST.length > 200) {
  throw new Error(`roast must be 1-200 characters, got ${ROAST.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
