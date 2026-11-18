// news-image-20261117 v4 — "The day the Kerch Bridge fell".
//
// A deterministic front page: this program copies the finished
// 1024x1024 broadsheet (entry.png, composed offline with PIL from
// flat-vector panel art and code-rendered text) into the output
// directory byte for byte. No network, no randomness, no clock:
// the same input always produces the same file.
//
// The page sums up Tuesday 17 November 2026 in 43 stories:
// three illustrated heroes (Kerch Bridge, Hormuz, the Quad summit),
// ten infographic panels, a stat strip, a dotted world map and a
// thirty-item ALSO list. Every figure on it was verified against
// at least two independent news sources before it was drawn.

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(targetDir, "entry.png");

mkdirSync(targetDir, { recursive: true });
copyFileSync(source, target);
console.log(`wrote ${target} (43 stories, Tuesday 17 November 2026)`);
