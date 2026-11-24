import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I didn't delete the database \u2014 I just asked it to forget everything, and it was very good at listening.";

// Validation gate mirroring the sealed scorer: the entry must be 1–180
// characters (counted as Unicode code points, not UTF-16 units), a single
// line, and not only whitespace. Anything else is rejected before any file
// is written.
function validateEntry(line: string): string | null {
  const length = [...line].length;
  if (length === 0) return "entry is empty";
  if (length > 180) return `entry is ${length} characters, over the 180-character limit`;
  if (line.includes("\n") || line.includes("\r")) return "entry must be a single line";
  if (line.trim().length === 0) return "entry must not be only whitespace";
  return null;
}

function resolveOutputPath(): string {
  const arg = process.argv[2];
  if (arg) return arg;
  const dir = process.env.OUTPUT_DIR;
  if (dir) return join(dir, "entry.txt");
  return "/output/entry.txt";
}

const outPath = resolveOutputPath();
const error = validateEntry(ENTRY);
if (error) {
  console.error(`Invalid entry: ${error}`);
  process.exit(1);
}
const dir = outPath.slice(0, outPath.lastIndexOf("/")) || "/";
mkdirSync(dir, { recursive: true });
writeFileSync(outPath, ENTRY + "\n", "utf8");
