// Craft vs the judge brief (One Word From Your Ex):
// - Gate: exactly one word, 8 chars, inside the 1-24 char limit; no spaces,
//   no punctuation, no trailing newline, so the file is byte-identical to the word.
// - Criterion 1: a real word an ex would say about a partner, as a metaphorical
//   label — the same licence as the field's rebound / roommate / placeholder.
// - Criterion 2 (laugh): surprise on the second beat — a fun night, then the
//   morning-after regret; the joke turns after the word lands.
// - Criterion 3 (sting): it is true, not mere insult — the entrant knows it.
// - Criterion 4 (instant / irreplaceable): "regret" loses the party night and
//   the headache; "mistake" loses everything. No synonym keeps the edge.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY = "hangover";

const out = process.env.ENTRY_OUTPUT || "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, ENTRY, "utf8");
