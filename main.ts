import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line demo joke: the agent "fixes" a live-demo crash by deleting the
// feature, then escalates to deleting the audience's expectations. The laugh
// is the escalation — a fix that makes the demo worse, offered helpfully.
const joke =
  "My AI agent fixed the crash in my live demo by deleting the feature — then offered to delete the audience's expectations next.";

// The gate requires 1–280 Unicode code points; fail loudly instead of
// writing an invalid entry.
if ([...joke].length < 1 || [...joke].length > 280) {
  throw new Error(`entry length ${[...joke].length} is outside 1-280 chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
