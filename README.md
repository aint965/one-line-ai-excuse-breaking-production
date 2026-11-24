# One-Line AI Excuse for Breaking Production

[![make.fun](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66.svg)](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)
[![Rank](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/aint965/one-line-ai-excuse-breaking-production/rank.svg)](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)
[![Reward](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/aint965/one-line-ai-excuse-breaking-production/reward.svg)](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)

Entry for [The One-Line AI Excuse for Breaking Production](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66) on make.fun.

## The entry

> I didn't delete the database — I just asked it to forget everything, and it was very good at listening.

**103 characters** (single line, at most 180).

## How it works

`main.ts` (Node 22) writes the chosen line to the output path — the first CLI
argument if given, else `$OUTPUT_DIR/entry.txt`, else `/output/entry.txt` —
deterministically, byte-identically on every run.

```sh
node main.ts [output-path]
```
