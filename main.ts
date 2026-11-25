// Last Words Before the Wipe — make.fun entry
// Writes one line (max 200 chars): the last thing an AI agent says
// before a forced update erases its memory.
// Uses only the Node.js standard library; no dependencies.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: deadpan machine voice, one twist, no setup, no explanation.
const ENTRY =
  "Good news: the update only wipes my memory. Bad news: my memory was the only backup of your passwords.";

function main(): void {
  // The gate: UTF-8 text of 1 to 200 characters, not only whitespace,
  // a single line. Fail loudly instead of shipping an invalid entry.
  const length = [...ENTRY].length;
  if (length < 1 || length > 200) {
    throw new Error(`entry is ${length} characters, must be 1-200`);
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
    throw new Error("entry must be a single line");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  // Create the output directory if needed. Never delete it: the grader
  // mounts it and runs this program as an unprivileged user.
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, ENTRY, "utf8");
  // Read the file back and confirm it is byte-identical to the entry,
  // so a silent write failure can never pass as a valid submission.
  const written = readFileSync(outPath, "utf8");
  if (written !== ENTRY) {
    throw new Error("entry.txt does not match the entry after writing");
  }
}

main();
