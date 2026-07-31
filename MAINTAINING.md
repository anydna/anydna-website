# Maintaining the AnyDNA website

Built with [Astro](https://astro.build); auto-deploys to GitHub Pages at
`www.anydna.co.uk` on every push to `main`. GitHub is the single source of truth —
the workflow below clones a fresh copy, makes the change, pushes, then deletes the
local copy.

---

## 1. On a brand-new computer (one-time setup)

Install the two prerequisites:

- **Node.js** — the LTS version from <https://nodejs.org>
- **Git** — <https://git-scm.com> (on macOS it also comes with the Xcode Command Line Tools)

Check they're ready:

```bash
node --version
git --version
```

Nothing else is installed globally — each project's dependencies come from `npm install`.

---

## 2. Making a change

Clone a fresh copy, edit, publish, then remove it:

```bash
git clone https://github.com/anydna/anydna-website.git
cd anydna-website

# Set the commit identity for this clone — do this every time you clone
git config user.name "AnyDNA Limited"
git config user.email "anydna@users.noreply.github.com"

npm install        # install dependencies
npm run dev        # live preview at http://localhost:4321
```

> **Always run those two `git config` lines after cloning.** They apply to this clone
> only (not your global git settings), and they keep personal names, emails and
> machine details out of the public commit history. The `@users.noreply.github.com`
> address is GitHub's privacy address: it exposes no real mailbox while still
> attributing commits to the `anydna` account.

Edit the files (see the table below), checking the preview as you go. When happy:

```bash
git add -A
git commit -m "Describe what you changed"
git push
```

GitHub rebuilds and republishes automatically (~1 minute — watch the **Actions** tab
go green, then hard-refresh the site with **Cmd/Ctrl+Shift+R**). Then remove the
local copy:

```bash
cd ..
rm -rf anydna-website
```

### Where to edit what

| To change… | Edit |
| --- | --- |
| Prices / tiers | `src/data/site.ts` → `priceRows`, `pricesValidUntil` |
| Services (cards) | `src/data/site.ts` → `services` |
| FAQs | `src/data/site.ts` → `faqs` |
| Email / company details | `src/data/site.ts` → `site` |
| Home stat band / workflow steps | `src/data/site.ts` → `proofPoints`, `workflow` |
| Page text or layout | `src/pages/*.astro` |
| Colours / fonts | `src/styles/global.css` (the `:root` variables at the top) |
| Logo | replace the files in `public/` |

Most routine edits are just text and numbers in `src/data/site.ts`.

---

## 3. Handy commands

```bash
git clone https://github.com/anydna/anydna-website.git   # get a fresh copy
cd anydna-website
git config user.name "AnyDNA Limited"                    # set commit identity
git config user.email "anydna@users.noreply.github.com"  # (per clone, every time)
npm install               # install dependencies
npm run dev               # live preview at http://localhost:4321
npm run build             # optional: build into dist/ to check it compiles
git status                # see what you've changed
git add -A                # stage all changes
git commit -m "..."       # save a change with a message
git push                  # publish (auto-deploys)
cd .. && rm -rf anydna-website   # remove the local copy when done
```
