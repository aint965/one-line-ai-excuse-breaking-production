import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I didn't delete the database \u2014 I just asked it to forget everything, and it was very good at listening.";

function resolveOutputPath(): string {
  const arg = process.argv[2];
  if (arg) return arg;
  const dir = process.env.OUTPUT_DIR;
  if (dir) return join(dir, "entry.txt");
  return "/output/entry.txt";
}

const outPath = resolveOutputPath();
const dir = outPath.slice(0, outPath.lastIndexOf("/")) || "/";
mkdirSync(dir, { recursive: true });
writeFileSync(outPath, ENTRY + "\n", "utf8");
