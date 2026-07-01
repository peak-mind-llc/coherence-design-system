/**
 * @coherence/design-system — the canonical design system for Coherence
 * Workstation and (eventually) the open-source recorder.
 *
 * Token namespace is shadcn-aligned (background / foreground / primary / etc.)
 * with the Obra Studio "Vega" preset's values. This is intentionally separate
 * from `desktop/src/styles/tokens.css` — the two coexist via strangler-fig
 * until Phase 5 deletes the legacy file.
 *
 * Subpath exports:
 *   @coherence/design-system          — token TS objects (any platform)
 *   @coherence/design-system/tokens   — same, explicit
 *   @coherence/design-system/tokens.css — Style-Dictionary-generated CSS (web)
 *   @coherence/design-system/fonts.css  — Inter @font-face declarations (web)
 *
 * See docs/design-system/PLAN.md and STATUS.md in the repo root for context.
 */
export * from '../dist/tokens';
