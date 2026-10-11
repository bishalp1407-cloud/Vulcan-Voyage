# Workflow Log: Section 4 "How We Work" Smooth Scroll Trigger Animations

**Date**: 2026-10-09  
**Time**: 15:35:13 IST  
**Status**: COMPLETED  
**Scope**: Section 4 Pointer Scroll Animation Polish (Method Section)  

---

## 1. Summary of Changes

Upgraded the scroll reveal behavior for Section 4 (**How We Work** / Method section) so that as the user scrolls down, each pointer stage (`01 Observe`, `02 Question`, `03 Prototype`, `04 Refine`, `05 Deliver`) triggers individually with silky smooth animations.

---

## 2. Key Animation Features

1. **Individual Intersection Observers**:
   - Each pointer stage (`01`, `02`, `03`, `04`, `05`) is wrapped in its own `<Reveal>` component with a `-10%` viewport offset trigger.
   - As each pointer enters the screen while scrolling, it triggers independently.

2. **Silky-Smooth Deceleration Curve**:
   - Implemented Apple-style deceleration curve `cubic-bezier(0.16, 1, 0.3, 1)` for 700ms slide and fade entrances.

3. **Staggered Child Reveal**:
   - **Dot Indicator (`.stageDot`)**: Pop-in spring animation `cubic-bezier(0.34, 1.56, 0.64, 1)` with crimson glow.
   - **Number (`01`, `02`...)**: Horizontal slide-in from left (`-10px` $\rightarrow$ `0px`).
   - **Title (`Observe`, `Question`...)**: Upward slide-in (`12px` $\rightarrow$ `0px`).
   - **Line Description**: Upward fade-in (`16px` $\rightarrow$ `0px`).

4. **Timeline Track Line & Hover Elevation**:
   - Continuous vertical guide track connecting all 5 pointer stages.
   - Interactive hover state: Crimson dot scaling, glow box-shadow, and pointer title color transition.

---

## 3. Files Modified

- `src/components/motion/Reveal.tsx` (Added configurable `rootMargin` support)
- `src/components/sections/Method.tsx` (Wrapped individual pointer stages in `Reveal`)
- `src/components/sections/Method.module.css` (Added timeline track line, stage dots, and hover interactions)
- `src/app/motion.css` (Added cubic-bezier deceleration and spring reveal keyframes for `.js-stage-reveal`)

---

## 4. Verification

- Executed `npm run build` static optimization and type safety check.
- Result: **Compiled successfully with 0 errors**.
