# Phase 5 motion and interaction

- **Date:** 2026-10-08
- **Time:** 15:29–15:42 IST
- **Phase:** 5 — Motion and interaction
- **Objective:** Motion that clarifies, reveals, or creates emotion — nothing else.
- **Status:** done

## What was done

- Reveal system: `motion-on` on html unless `prefers-reduced-motion`, IntersectionObserver plus scroll fallback, `is-in` kept in React state.
- Moments only: hero enter, Don’t Design the Obvious word stagger, method track + stages, contact close. CTA hover is a 1px lift.
- `suppressHydrationWarning` on `<html>` so the beforeInteractive motion script does not trip a hydration overlay.
- Reduced-motion: no `motion-on`, CSS kill-switch, button hover transform off. Off-screen copy stays fully visible.

## Outcome

- Motion users get a few slow reveals (~150–600ms, `--ease-vv`). Reduced-motion users get a complete page with no hide.
- No bounce, parallax, or per-section decoration.

## Next

- Phase 6 — responsive and accessibility (breakpoints, touch, keyboard, contrast).
