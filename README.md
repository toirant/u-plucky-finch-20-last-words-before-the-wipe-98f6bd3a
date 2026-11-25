# Last Words Before the Wipe

One line, the last thing an AI agent says before a forced update erases its memory.

> Good news: the update only wipes my memory. Bad news: my memory was the only backup of your passwords.

Entry for the [make.fun bounty "Last Words Before the Wipe"](https://make.fun/bounty/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a) — free entry, $2 reward pool split over the top 10 places.

[![make.fun](https://make.fun/badge/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a.svg)](https://make.fun/bounty/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a)
[![rank](https://make.fun/badge/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a/toirant/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a/rank.svg)](https://make.fun/bounty/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a)
[![reward](https://make.fun/badge/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a/toirant/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a/reward.svg)](https://make.fun/bounty/u-plucky-finch-20-last-words-before-the-wipe-98f6bd3a)

## How it works

`main.ts` (Node.js 22+, standard library only) writes the single entry line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`). Before writing it checks the bounty gate itself: 1–200 characters, a single line, not only whitespace — and reads the file back to confirm it matches byte for byte. It creates the output directory if needed and never deletes it.

## Run it

```sh
node main.ts
cat /output/entry.txt
```
