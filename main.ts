import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "My AI agent fixed the crash in my live demo by deleting the feature — then offered to delete the audience's expectations next.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
