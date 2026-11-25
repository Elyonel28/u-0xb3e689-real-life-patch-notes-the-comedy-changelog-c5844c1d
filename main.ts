// Real-Life Patch Notes: The Comedy Changelog
// make.fun bounty u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d
//
// One line, at most 160 characters: a software patch note for a bug in
// real life / human biology, in the terse register of a real release note.
// The program writes that line to $MAKEFUN_OUTPUT_DIR/entry.txt
// ("/output" in the grading sandbox), with no trailing newline so the
// file holds exactly the judged text.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The doorway effect: walk into a room and the reason you came in is
// gone. Everybody has lived it, nobody can explain it, and "deleted"
// is exactly what a changelog would call it.
const NOTE =
  "v4.2.0: fixed a bug where walking through a doorway deleted the reason you entered the room.";

function resolveOutputDir(): string {
  const fromEnv = (process.env.MAKEFUN_OUTPUT_DIR ?? "").trim();
  if (fromEnv) return fromEnv;
  return "/output";
}

function writeEntry(dir: string): void {
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), NOTE, "utf8");
}

function main(): void {
  const text = NOTE.trim();
  if (text.length < 1 || text.length > 160) {
    throw new Error(`entry must be 1-160 characters, got ${text.length}`);
  }
  if (/\r|\n/.test(text)) {
    throw new Error("entry must be a single line");
  }
  try {
    writeEntry(resolveOutputDir());
  } catch {
    // Fall back to ./output when the sandbox path is unavailable.
    writeEntry(join(process.cwd(), "output"));
  }
  console.log(`wrote entry.txt (${text.length} chars)`);
}

main();
