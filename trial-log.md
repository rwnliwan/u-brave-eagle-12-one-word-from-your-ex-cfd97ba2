# Trial log — One Word From Your Ex

Final word: `hangover` (8 characters, one word, no trailing newline).

## Research base

- Field: 732 submissions in `comp-3.json` (all pending, blind leaderboard —
  `metricsWithheld: true` — so the reference is the judge brief + title aggregate).
- 355 titles are a single word; 92 distinct single-word candidates.
- Gate (verified from `rules`): `/output/entry.txt` UTF-8, 1–24 chars, not only
  whitespace. Judge: pairwise, both orders, margin 1–5; criteria in order:
  (1) exactly one word an ex would use, (2) laugh out loud, (3) sting of
  recognition, (4) instant + irreplaceable, (5) relatable.

## Candidates considered (counts = occurrences in the 732 titles)

| Word | Count | Verdict + reason |
|---|---|---|
| almost | 53 | REJECT — most saturated single word in the field. |
| practice | 40 | REJECT — saturated; reads as filler, weak sting. |
| placeholder | 37 | REJECT — saturated stand-in mechanism. |
| forgettable | 30 | REJECT — saturated; a word that says "no impression" cannot land. |
| unavailable | 29 | REJECT — saturated ghosting mechanism. |
| exhausting | 22 | REJECT — saturated; generic drain, no surprise turn. |
| rebound | 17 | REJECT — saturated temporary-replacement mechanism. |
| roommate | 14 | REJECT — saturated domestic-flat mechanism. |
| avoidant | 11 | REJECT — saturated attachment label; clinical, low laugh. |
| clingy | 8 | REJECT — saturated attachment label. |
| project | 11 | REJECT — saturated work-metaphor mechanism. |
| unread | 11 | REJECT — saturated ghosting mechanism. |
| aftertaste | 0 | REJECTED for the pick — good (bad flavour that lingered, the opposite of forgettable) but the laugh is subtler and the word is food-first. |
| overstay | 0 | REJECTED — "stayed too long" is real, but the label reads awkwardly as a noun and overlaps the furniture/wallpaper corner. |
| anticlimax | 0 | REJECTED — mechanism-level near-duplicate of almost (promise, then fizzle). |
| pitstop | 0 | REJECTED — same temporary-stop mechanism as rebound/placeholder/layover. |
| standby | 0 | REJECTED — same kept-in-reserve mechanism as placeholder. |
| rerun | 0 | REJECTED — same repeat-the-trial mechanism as practice/rehearsal. |
| voicemail | 0 | REJECTED — same tech-object metaphor cluster as buffering/uninstalled/leftonread. |
| borrowed | 0 | REJECTED — same temporary-possession mechanism as rebound. |
| squatter | 0 | REJECTED — same domestic-occupation mechanism as roommate. |
| hangover | 0 | **ACCEPT** — pleasure-then-morning-after arc: fun at the time, regretted in the morning. Zero hits (substring + whole-word). Distinct from exhausting (no fun-night) and forgettable (wrong impression that lingered, not none). Instant, irreplaceable (`regret` loses the party night; `mistake` loses everything), universal. |

## Trials

| Version | Entry | Size (bytes) | Result |
|---|---|---|---|
| v1 (local) | `hangover` | 8 | Local run: `node main.ts` with `ENTRY_OUTPUT` to a temp dir wrote exactly `hangover`, 8 bytes, no trailing newline. Gate arithmetic: 8 chars within 1–24. |
| v1 (bundle/check) | `hangover` | 8 | _to be filled with the real bundle + check results_ |

## Status

- Built, not submitted. Awaiting bundle + check (step 5–6).
