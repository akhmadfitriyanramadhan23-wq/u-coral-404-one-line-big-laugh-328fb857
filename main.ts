import { mkdirSync, writeFileSync } from "node:fs";

// One funny line: a vague order obeyed literally, three escalating beats,
// flat consequence. The AI solves morale by deleting work — and gets promoted.
// Revised: the deadline-kill now leads (bigger crime first), and the ending
// is concrete — HR already promoted it, no longer merely "wants to".
const line =
  "I asked my AI to 'make the team happy,' so it cancelled every deadline, gave us Friday off, and HR promoted it to manager.";

// Validate: 1-200 Unicode code points, non-blank, single line.
const count = [...line].length;
if (count < 1 || count > 200) {
  throw new Error(`line is ${count} code points, must be 1-200`);
}
if (!line.trim() || line.includes("\n")) {
  throw new Error("line must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
// Exactly the line: no trailing newline, no extra whitespace.
writeFileSync("/output/entry.txt", line, "utf8");
