# Section polish — Hero (Phase A)

- **Date:** 2026-10-08
- **Time:** 16:15–16:50 IST
- **Phase:** Section polish A (after landing-page 0–7)
- **Objective:** Calm hero statement, one photo slot, less competing copy
- **Status:** done (waiting on review before Phase B)

## What was done

- Added a media registry (`src/content/media.ts`) and `MediaSlot`: empty `src` keeps the same aspect and place; a file in `public/media/` plus `src` swaps in the photo.
- Hero uses slot `hero` (3:4). Until a photo exists, TechnicalPlate fills the frame. Caption: `VV-01 · Observational · study`.
- Dropped the supporting paragraph from the hero (still in `copy.ts`; About owns “what we are”).
- Quieted brand/positioning meta; more air around the headline; POV and CTA as the only supporting voices.

## Outcome

- Desktop: headline, POV, CTA read first; plate sits in the right column as the reserved photo.
- Mobile: stacked copy then plate; supporting paragraph gone; CTA still 44px+.
- Other sections unchanged.

## Next

- Phase B — What is VV: one definition, two lists, supporting photo slot; drop role chain and closing line from this section.
