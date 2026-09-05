# ZulIA site redesign: design brief

Working document for the `redesign` branch. Picks below are committed before any
reference board is generated and hold across every board and every coded section.
Method adapted from the reference-boards / image-to-code / review-rubric pipeline;
the visual identity is ZulIA's own.

## Positioning

- Voice: the consultancy speaks as "nosotros". The founder appears only on /nosotros.
- One-line read: consultoría de software, automatización e IA en Monterrey que
  conecta los sistemas que ya usa una empresa a una capa de inteligencia que
  consulta y ejecuta.
- Flagship line: capa agéntica sobre sistemas existentes. Everything else
  (software a medida, sitios y catálogos, ingeniería asistida por IA, cursos)
  hangs off the same promise: menos pantallas, más resultado.

## Combinatorial picks (locked)

| Category | Pick | Why |
| --- | --- | --- |
| Theme paradigm | Pristine Light: paper `--paper`, ink `--ink`, night mode via existing tokens | Keeps the día/noche system; avoids the overused deep-dark default |
| Accent | Brand blue `#2f6bff` only (`--blue-dark` tokens for text/fills) | One accent, page-wide. No green, no amber, no neon |
| Background character | Technical dot/grid field, very low contrast, only behind product stages | Reads as engineering, not decoration |
| Typography | Onest Variable (display + body), JetBrains Mono for spec labels only | Clean grotesk already licensed and self-hosted |
| Hero architecture | Editorial offset: headline top-left, real product screenshot bleeding bottom-right | Avoids centered stack and left-text/right-image defaults |
| Section system | Swiss grid discipline: 12 columns, hairline dividers, generous gutters | Modular, predictable, easy to extend from content collections |
| Signature components | Product UI panel stack (hero), gapless bento (proyectos), brand marquee (logos), vertical rhythm lines (servicios) | Each appears once |
| Narrative spine | Tool / precision instrument | Every screen is a tool that does work, not a brochure |
| Second-read moment | Narrow vertical side-rail note next to the proyectos grid (sector + year in mono) | Placed once |
| Corner language | All-sharp: 2px radius max on tiles, 0 on images | Direct response to "muy redondo" |
| Motion | One signature effect: hero panel stack settles on load. Reveals only where they show hierarchy. Reduced-motion fallback everywhere | |
| Animation mode | non-animated (user choice: consultancy site, no scroll-scrub film) | |

## Section plan: home

1. Hero (editorial offset, product panel stack). Max 4 text elements: headline,
   subtext, primary CTA "Cotizar", secondary "Ver proyectos".
2. Logo marquee (real SVG/PNG marks from `public/brands`, logos only).
3. Capa agéntica explainer: one diagram, one paragraph. Split header banned;
   stack vertically.
4. Proyectos: gapless bento, one cell per real case, real screenshots, side-rail
   note with sector + year. Filter chips by line.
5. Servicios: vertical rhythm lines, five lines with plain names, one sentence each.
6. Semilla + Cursos: two-cell row, product and training, each with its own CTA.
7. Cómo trabajamos: four steps, text only, `border-t` dividers, no cards.
8. Cotizar CTA band.

Eyebrow budget: ceil(8/3) = 3. Use on sections 3, 4, 5 only.

## Copy rules

- Headline ≤ 8 words, subtext ≤ 25 words, one CTA label per intent page-wide
  ("Cotizar" everywhere, never "Hablemos" + "Contacto" + "Agendar").
- No em/en dashes in visible text. No filler verbs. No invented metrics. Real
  client names only with permission; otherwise sector + city.
- Spanish, formal-direct, "nosotros".

## Reference boards

One 16:9 board per home section, generated with `nano_banana_pro` (2 credits
each), stored in `refs/` (ignored by git). Boards are the spec; code follows the
board, not habit. Boards drawn nav/footer chrome is non-normative.
