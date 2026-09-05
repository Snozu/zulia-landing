# ZulIA design system

Rules for every page and component in this site. Tokens live in
`src/styles/global.css`; content lives in `src/content/projects` and `src/data`.
When a new section or page is added, it passes the checklist at the end before
it is committed.

## Identity

- Wordmark: `ZulIA`, Onest 700, tight tracking. "Zul" in ink, "IA" in
  `--brand-blue` (#2f6bff). Rendered by `src/components/Wordmark.astro`. No
  shield, no icon, no gradient.
- Voice: the consultancy speaks as "nosotros". The founder appears only on
  /nosotros. Spanish, direct, no filler verbs.
- Promise that every page hangs off: fewer screens, more results. Flagship line
  is the capa agéntica.

## Tokens

| Role | Day | Night |
| --- | --- | --- |
| Page ground | `--paper` #f3f5f6 | #0e1013 |
| Cards | `--white` #ffffff | #15181d |
| Ink | `--ink` #090a0c | #f2f3f5 |
| Muted text | `--text-muted` #636a74 | #9da5b0 |
| Accent text | `--blue-dark` #315487 | #a4b9dc |
| Accent fill | `--accent-surface` #315487 | #315487 |
| Hairline | `--line` #d6dadd | #2b3037 |
| Product stage | `--stage` #0e1013 | #090a0c |

- One accent. Brand blue is reserved for the wordmark "IA", the `Aprobar`
  button inside product stages, and small mono labels on the stage.
- No hardcoded hex in components. Both themes must read; the toggle in the nav
  is the test.
- The product stage (`.stage`) is always dark in both themes. Real screenshots
  live there.

## Type

- Onest Variable for display and body. JetBrains Mono for labels, captions and
  specs only.
- Scale: `.display` clamp(2.6rem, 5.2vw, 4.6rem) weight 620, `.h2`
  clamp(1.9rem, 3.4vw, 3rem) weight 600, `.h3` 1.25rem, body 1rem / 1.6,
  `.label` and `.mono` .72rem uppercase, letter-spacing .08em.
- Headline max two lines on desktop. If it wraps to three, the size or the copy
  is wrong, not the container.
- Body text max 65ch (`.prose`), leads max 60ch (`.lead`).

## Shape and layout

- Corners: 2px everywhere (`--radius`). Images and hairline grids: 0.
- Containers: `.shell` (84rem) and `.shell-narrow` (64rem). Sections use
  `.section` (padding-block `--section`) or `.section-tight`.
- Separation is done with hairlines (`border-top`, `.hairline-grid`) and
  whitespace, not with shadows. Shadows appear only under the floating hero
  panels.
- Each layout family appears once per page: hero offset, hairline bento, rhythm
  rows, two-cell row, step list, CTA band.
- No three identical feature cards in a row.

## Components

- Buttons: `.btn` (solid accent) and `.btn-ghost`. Text links with arrow:
  `.link`. One label per intent across the whole site: the primary CTA is
  always "Cotizar".
- `.badge` for state (En producción, Piloto, En desarrollo, Uso interno,
  Pre-lanzamiento). `.chip` for filters.
- `ProjectTile` is the only way a project appears in a grid. It reads from the
  content collection; do not hand-build project cards.
- `CtaBand` closes every page.

## Content rules

- Projects are files in `src/content/projects`. Required: problem, what was
  built, stack, outcome, status, role. No invented metrics. If a number is
  real and verifiable, it goes in the outcome; otherwise it does not exist.
- Screenshots are real captures of the product or site. Where none exists yet,
  the tile shows a typographic placeholder that says so. Never a fake UI built
  from divs.
- Client names appear only with permission. Otherwise sector and city.
- Role `equipo` (work done inside the client's team, such as Envia.com) always
  renders the disclaimer on the case page.
- No em dash or en dash in visible text. Use a period, comma or colon.
- Eyebrow labels (`.label`) at most one per three sections on a page.

## Pre-commit checklist

```sh
# 1. No dashes in visible copy
grep -rn "—\|–" src/pages src/components src/data src/content | grep -v semilla
# 2. No hardcoded hex in components (tokens only)
grep -rnE "#[0-9a-fA-F]{6}" src/components src/pages | grep -vE "global.css|brand-blue|#2358e0|#b3261e"
# 3. Every route answers
for r in / /servicios/ /proyectos/ /cursos/ /cotizar/ /nosotros/ /semilla/; do curl -s -o /dev/null -w "$r %{http_code}\n" http://127.0.0.1:4321$r; done
# 4. Build passes
rm -rf dist .astro && npm run build
```

Then look at the page in both themes and at 390px wide before committing.
