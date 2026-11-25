[![make.fun · u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
[![rank](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/Elyonel28/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/rank.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
[![reward](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/Elyonel28/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/reward.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)

# Real-Life Patch Notes: The Comedy Changelog

One line, 92 characters: a software patch note for a bug in real life —
the doorway effect, where walking into a room deletes the reason you came
in. Written for the make.fun bounty
"Real-Life Patch Notes: The Comedy Changelog".

## The entry

```text
v4.2.0: fixed a bug where walking through a doorway deleted the reason you entered the room.
```

## How it works

`main.ts` (Node 22, stdlib only) writes that single line to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (`/output` in the grading sandbox),
with no trailing newline, so the file holds exactly the judged text.
It validates the gate itself first: 1–160 characters, one line, no
whitespace-only content.

## Run

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
